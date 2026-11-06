import React, { useEffect } from 'react'

function User(props) {
    useEffect(() => {
        console.log("user component mounted")
        return () => {
            console.log("user compounnet unmounted")
        }
    }, [])
    return (
        <div>
            <p>My name is {props.name}</p>
            <p>My age is {props.age}</p>
        </div>
    )
}

export default User