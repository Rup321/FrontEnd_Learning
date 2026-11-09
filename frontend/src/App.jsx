import React, { useEffect, useState } from 'react'
import User from './Component/User'
import UseState from './Component/UseState'
import Timer from './Component/Timer'
import FetchUsers from './FetchUsers'



function App() {
  let greet = "Hello"
  let [count, setCount] = useState(0)
  let [name, setName] = useState("Rupali")
  let [show, setShow] = useState(true)

  // useEffect(() => {
  //   console.log("Name changed")
  // }, [name])
  // useEffect(() => {
  //   console.log("Count changed")
  // }, [count]);


  return (
    <div>
      <h1>{greet}</h1>
      {/* <h1>{name}</h1>
      <h1>{count}</h1>
      <h1>{count % 2 == 0 ? `Count is Even` : `Count is Odd`}</h1>

      <button onClick={() => { setCount(count => count + 1) }}>
        Increment

      </button>
      <button onClick={() => { setCount(0) }}>Reset</button>
      <button onClick={() => { setName("Sanika") }} style={{ margin: "10px" }}>Decrement</button>
      <button onClick={() => setShow(!show)}>UserMount</button>

      <User name="Rupali Pawar" age="23"></User>
      <User name="Vishal Pawar" age="20"></User>

      {show && <User name="Simran" age={22} />} */}

      <UseState></UseState>
      <button onClick={() => {
        setShow(!show)
      }}>TimeUnmount</button>
      {show && <Timer></Timer>}

      <FetchUsers planId="019d00aa-b240-7d95-8cc2-479f04f365d7"></FetchUsers>

    </div>
  )
}

export default App