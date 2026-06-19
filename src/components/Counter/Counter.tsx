import {useState} from "react";
// import "./Counter.css"
import style from "./Counter.module.css"
import style2 from "./Counter2.module.css"
/*
inline styles
* */
const Counter = ()=>{
    const dx = 20
    function handlerClick(num:number):void{
        //batch
        if((value<100 && num>0) || (value>0 && num<0))
            setValue(value+num)

    }
    const [value, setValue] = useState(0)
    return (
        <>
            <p className={style.counter}>My Counter</p>
            <p className={style2.counter}>Value: <span style={value>=250?{color:"red"}:{color:"black"}}>{value}</span></p>
            <button onClick={()=>handlerClick(dx)}>Up</button>
            <button onClick={()=>handlerClick(-dx)}>Down</button>
        </>
    )
}
export default Counter