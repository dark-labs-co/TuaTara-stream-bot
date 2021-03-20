import React, { useState, useEffect } from 'react'

export default function TimeHook() {
    const [time, setTime] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => setTime(time + 1), 5000);
        return () => {
            clearInterval(interval);
        };
    }, [time]);

    return (
        <div>
            {time}
        </div>
    )
}
