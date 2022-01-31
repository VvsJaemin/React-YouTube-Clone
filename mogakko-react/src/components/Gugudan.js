import React, { useState } from "react";
import Button from "./Button";
import Dan from "./Dan";
import Layout from "./Layout";

const Gugudan =()=>{
    const [number, setNumber] = useState(2)

    const plus =()=>{
        setNumber(number + 1)
    }

    const minus =()=>{
        setNumber(number-1)
    }

    const multiple = ()=>{
        setNumber(number*2)
    }

    return(
        <Layout>
            <Dan number={number}/>
            <Button onClick={plus} text="+1"/>
            <Button onClick={minus} text="-1"/>
            <Button onClick={multiple} text="*2"/>
        </Layout>    
    )
} 

export default Gugudan