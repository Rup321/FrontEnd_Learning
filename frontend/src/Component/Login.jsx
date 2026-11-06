import React, { useEffect, useState } from 'react'

function Login() {
    let [login, setLogin] = useState([])
    useEffect(() => {
        console.log("user logged in");
        return () => {
            console.log("user logged out")
        }
    }, [])
    return (
        <div>
            <h1>Login Details</h1>
{login.map((log)=>{

})}

        </div>
    )
}

export default Login