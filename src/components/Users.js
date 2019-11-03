import React, {useState, useEffect} from 'react'
import axios from 'axios'

function User (props) {
    const [user, setUser] = useState([])
    /* const id = props.match.params.id */

    // useEffect runs when anyting in the component is updated
    useEffect(() => {
        axios.get('/users/' + id).then(resp => {
            setUser(resp.data)
        })
    }, [users])

    return (
        <div>
            {users.map(user => {
                <p key={'user' + user.id}>{user.name}</p>
            })}
        </div>
    )
}

export default User