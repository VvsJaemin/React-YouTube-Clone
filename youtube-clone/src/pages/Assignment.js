import React, { useState } from "react";
import Layout from "../components/shared/Layout";
import { Link } from 'react-router-dom';
const Assignment =()=>{

    const[change, setChange] = useState(true)

    const clickChange = ()=>{
        setChange(change=>!change)
    }

    return(
        <div>
            {change ? <div>True에요</div> : <div>false</div>}
            <button onClick={clickChange}>바꿔바꿔</button>
            <button><Link to="/">홈으로</Link></button>
        </div>
        
    )
}

export default Assignment