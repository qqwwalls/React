import {useEffect, useState} from "react";

const Test = () => {
    const [count, setCount] = useState(0);
    console.log("Render Test Component")
    
    useEffect(() => {
        console.log("Test use Effect")
    }, [])
    
    return(
        <>
            <button onClick={() => setCount(count + 1)}>Up</button> Test Component {count}
        </>
    )
}

export default Test;
