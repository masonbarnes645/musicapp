import { useEffect, useState } from "react"

function Clock() {
    const [time, setTime] = useState(new Date())
    useEffect(() => {
        const timerID = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(timerID);
    }, []);
    return(
        <h1 id="clock">{time.toLocaleTimeString()}</h1>
    )

}
export default Clock

// timezone / style