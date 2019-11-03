import React, { useState, useEffect } from "react"
import axios from "axios"

function User (props) {
    const [user, setUser] = useState("")
    const [foo, setFo] = useState("")
    const id = props.match.params.id

    axios.get("/users/" + id).then(resp => {
        console.log("Called api")
    })

    return (
        <div>
            <p>Hello, {user}!</p>
            <input type="text" value={foo} onChange={e =>setFoo(e.target.value)} />
        </div>
    )
}

export default User