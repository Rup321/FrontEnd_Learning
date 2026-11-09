import React, { useEffect, useState } from 'react'

function UseState() {
    let [count, setCount] = useState(0);
    let [name, setName] = useState("Rupali")

    useEffect(() => {
        console.log("Count updated")
    }, [count]);

    useEffect(() => {
        console.log("Name updated")
    }, [name])
    return (
        <div>
            <button style={{ margin: "12px" }} onClick={() => { setCount(prev => prev + 1) }}>count {count}</button>
            <button onClick={() => setName("Sanika")}> Name :{name}</button>

        </div>
    )
}

export default UseState