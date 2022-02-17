import React, { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import axios from "axios";

export default function Check() {
    const [ meter_number, setMeterNumber ] = useState(1)
    
    const [ error, setErorr ] = useState("")
    const [ isSuccess, setIsSucess ] = useState(false)
    
    const [ days, setDays ] = useState(0)
    
    const checkElectricty = async () => {
        try {
            let { data } = await axios.get(`http://localhost:8001/api/meters/by-number/${meter_number}`)
            
            setErorr("")
            setIsSucess(true)
            setDays(data.days)
        } catch (e) {
            setIsSucess(false)
            setErorr(e.response.data.message)
        }
    }
    
    return (<div>
        <h1 className="text-3xl font-medium">Check Electricty</h1>
        {error !== "" && <div className="py-10 text-red-500">{error}</div>}
        {isSuccess && <div className="py-10 text-lg text-green-500">Success you have electirity for {days} days</div>}
        <div>
            <Input type="string" placeholder="Meter number" data={{ st: meter_number, sts: setMeterNumber }}/>
            
            <Button title="Click me" onClick={checkElectricty}/>
        </div>
    </div>)
}