import {useRef, useEffect} from 'react'
import './App.css'

// import Button from "./ui/Button.tsx";

function App() {
    const refDiv = useRef(null);
    useEffect(()=>{
        console.log(refDiv)
    },[])
    return(
        <>
            <div ref={refDiv}>Block</div>
            {/*<Button text="Click Me 1" />*/}
            {/*<Button text="Click Me 2" handler={()=>{*/}
            {/*    alert("Hello Rect")*/}
            {/*}} />*/}
        </>
    )

}

export default App
