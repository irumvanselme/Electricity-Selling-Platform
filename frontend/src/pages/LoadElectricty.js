import React, { useState } from "react";
import axios from "axios";
import Input from "../components/Input";
import Button from "../components/Button";

export default function LoadElectricty() {
    const [ token, setToken ] = useState(1)
    
    const [ error, setErorr ] = useState("")
    const [ isSuccess, setIsSucess ] = useState(false)
    
    const loadElectricty = async () => {
        try {
            let { data } = await axios.post("http://localhost:8001/api/tokens/load", { token })
            
            setErorr("")
            setIsSucess(true)
            console.log(data)
        } catch (e) {
            setIsSucess(false)
            setErorr(e.response.data.message)
        }
    }
    
    
    return (
        <div>
            <h1 className="text-3xl font-medium">Load Electricty</h1>
            {error !== "" && <div className="py-10 text-red-500">{error}</div>}
            {isSuccess && <div className="py-10 text-lg text-green-500">Sucessfully buyed electricity with token
                :{token} ..</div>}
            <div>
                <Input type="text" placeholder="Token" data={{ st: token, sts: setToken }}/>
                
                <Button title="Click me" onClick={loadElectricty}/>
            </div>
        </div>
    )
}