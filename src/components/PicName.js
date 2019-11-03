import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function PicName (props) {
    const [pic, setPic] = useState([])
    const id = props.match.params.id

    useEffect(() => {
        axios.get(`/photos/${id}`).then(resp => {
            setPic(resp.data)
        })
    }, [id])

    return (
        <div className="pic4">
            <h1>{pic.aName}</h1>
            <main className="pic3">
            <img className="photo" src="{pic.url}" />
            </main>
        </div>
    )
}

export default PicName