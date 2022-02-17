import React, { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import axios from "axios";

export default function BuyElectricity() {
    const [ meter_number, setMeterNumber ] = useState(1)
    const [ amount, setAmount ] = useState(4)
    const [ error, setErorr ] = useState("")
    const [ isSuccess, setIsSucess ] = useState(false)
    const [token, setToken] = useState()
    
    const buyElectricty = async () => {
        try {
            let { data } = await axios.post("http://localhost:8001/api/tokens/buy",
                { meter_number, amount }
            )
            
            setErorr("")
            setIsSucess(true)
            setToken(data.body.token)
            console.log(data)
        } catch (e) {
            setIsSucess(false)
            setErorr(e.response.data.message)
        }
    }
    
    return (<div>
        <h1 className="text-3xl font-medium">Buy Electricty</h1>
        {error !== "" && <div className="py-10 text-red-500">{error}</div>}
        {isSuccess && <div className="py-10 text-lg text-green-500">Sucessfully buyed electricity with token :{token} ..</div>}
        <div>
            <Input type="number" placeholder="Meter number" data={{ st: meter_number, sts: setMeterNumber }}/>
            <Input type="number" placeholder="Amount" data={{ st: amount, sts: setAmount }}/>
            
            <Button title="Click me" onClick={buyElectricty}/>
        </div>
    </div>)
}