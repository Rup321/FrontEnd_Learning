import React, { useEffect, useState } from 'react'

function FetchUsers(planId) {
    let [users, setUsers] = useState(null);
    let [loading, setLoading] = useState(true)
    let [err, setError] = useState(null)

    useEffect(() => {
        async function fetchUsers() {
            try {
                let response = await fetch(`https://gorest.co.in{planId}

`)
                let data = await response.json();

                setUsers(data)
            }
            catch (err) {
                console.log("Something went wrong");
                setError(err.message)
            }
            finally {
                setLoading(false)
            }
        }
        fetchUsers()
    }, [planId])

    // if (loading) {
    //     return <h1>Loading</h1>
    // }
    // if (err) {
    //     return <h1>err :{err}</h1>
    // }

    return (
        <div>

            {/* {users.map((user) => {
                return <h1>Name :{user.name} , email:{user.email} <br /></h1>
            })} */}
            {users ? <h1> user details :{users.name}</h1> : <h1>Loading</h1>}


        </div>
    )
}


 
export default FetchUsers