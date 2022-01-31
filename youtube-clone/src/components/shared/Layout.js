import React, { useState } from "react";
import Header from "./Header";
import styles from './Layout.module.css'
import Menu from "./Menu";
const Layout=({children, activeMenu})=>{
    const [click, setClick] = useState(true);

    function onClickMenu(){
        setClick(click=>!click)
    }
    return(
        <div className={styles.container}>
            <Header onClickMenu={onClickMenu}/>
            <div className={styles.layout}>
               {click ? <Menu activeMenu={activeMenu}/>:null}
               <div className={styles.contents} style={click?null:{marginLeft:'0'}}>
                {children}
            </div>
            </div>
        </div>
    )
}

export default Layout