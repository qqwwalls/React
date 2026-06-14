import { useState } from "react";
import styles from "./Counter.module.css";

const Counter = () => {
    const [value, setValue] = useState(0);

    function handlerClickUp(): void {
        if (value < 100) setValue(value + 1);
    }

    function handlerClickDown(): void {
        if (value > 0) setValue(value - 1);
    }

    const isMin = value <= 0;
    const isMax = value >= 100;
    const isLimit = isMin || isMax;

    return (
        <div className={styles.counterWrapper}>
            <p className={isLimit ? styles.limitText : ""}>Value: {value}</p>
            <div>
                <button 
                    onClick={handlerClickDown} 
                    className={isMin ? styles.disabledBtn : ""}
                    disabled={isMin}
                >
                    Down (-)
                </button>
                <button 
                    onClick={handlerClickUp} 
                    className={isMax ? styles.disabledBtn : ""}
                    disabled={isMax}
                >
                    Up (+)
                </button>
            </div>
        </div>
    );
};

export default Counter;
