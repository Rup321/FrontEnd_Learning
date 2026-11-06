import React, { useEffect, useState } from 'react'
import User from './Component/User'

function App() {
  let greet = "Hello"
  let [count, setCount] = useState(0)
  let [name, setName] = useState("Rupali")
  let [show, setShow] = useState(true)

  useEffect(() => {
    console.log("Name changed")
  }, [name])
  useEffect(() => {
    console.log("Count changed")
  }, [count]);

 
  return (
    <div>
      <h1>{greet}</h1>
      <h1>{name}</h1>
      <h1>{count}</h1>
      <h1>{count % 2 == 0 ? `Count is Even` : `Count is Odd`}</h1>

      <button onClick={() => { setCount(count => count + 1) }}>
        Increment

      </button>
      <button onClick={() => { setName("Sanika") }} style={{ margin: "10px" }}>Decrement</button>
      <button onClick={() => setShow(!show)}>UserMount</button>

      <User name="Rupali Pawar" age="23"></User>
      <User name="Vishal Pawar" age="20"></User>

      {show && <User name="Simran" age={22} />}
    </div>
  )
}

export default App