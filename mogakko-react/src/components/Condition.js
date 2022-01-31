import React, { useState } from "react";
import Button from "./Button";

const Condition =()=>{

    const [check, setCheck] = useState(false);

    const checkClick = ()=>{
        setCheck(check => !check)
    }

    return(
        <div>
            <Button onClick={checkClick} text="true?"/>
            {check && <div>true!</div>}
        </div>
    )
}

export default Condition