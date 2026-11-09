import React, { useEffect, useState } from 'react'

function Timer() {
    let [value, setValue] = useState(0);
    useEffect(() => {
        let timer = setInterval(() => {
            // console.log("timer")
            setValue(prev => prev + 1)

        }, 1000)
        return () => {
            clearInterval(timer)
        }

    }, [])
    return (
        <div>

            <h1>Value is {value}</h1>
        </div>
    )
}

export default Timer