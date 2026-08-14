import { useState, useEffect } from "react";

const Timer = () => {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        // Створюємо інтервал, який кожну секунду (1000 мс) додає +1
        const intervalId = setInterval(() => {
            setSeconds(prev => {
                // За умовою значення має бути 0-60, тому на 60 зупиняємось
                if (prev >= 60) {
                    clearInterval(intervalId);
                    return 60;
                }
                return prev + 1;
            });
        }, 1000);

        // Ця функція спрацює при unmounting (коли компонент зникає з DOM-дерева)
        return () => {
            clearInterval(intervalId);
            console.log("Таймер очищено (unmounted)");
        };
    }, []); // Пустий масив залежностей означає, що useEffect спрацює лише при монтуванні

    return (
        <div className="p-6 border-2 border-blue-400 rounded-xl bg-blue-50 text-center max-w-xs w-full shadow-sm mt-4 transition-all">
            <h2 className="text-xl font-bold mb-2 text-blue-800">Таймер</h2>
            <div className="text-5xl font-mono font-bold text-blue-600">
                {seconds}
            </div>
            <p className="text-sm text-gray-500 mt-2">сек.</p>
        </div>
    );
};

export default Timer;
