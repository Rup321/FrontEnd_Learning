const { useState } = require("react");

function App(){
   let [count ,setCount] =useState(0)
   let name ="Rupali"
  return (
   
<div style={{padding:"20px" , width:"100px" ,backgroundColor:"marron" }}>
<h1>Hello {name}</h1>
<p>you clicked the button {count}</p>
<button onClick={()=>setCount(count+1)}></button>

</div>

)
}