import React, { useState, useEffect } from "react"
import axios from 'axios'
import { Link } from 'react-router-dom'

function MyAlbums (props) {
    const [AlbumName, setAlbumName] = useState([])

    useEffect(() => {
        axios.get('/albums').then(resp => {
            setAlbumName(resp.data)
        })
    }, [])

    return (
        <div className="myAlbumsContainer">
            <h1>My Albums</h1>
            <main className="albumNameContainer">
                {AlbumName.map(x =>(
                  <Link to={`/AlbumName/${x.id}`}>
                    <div className="album">
                      <p>{x.aName}</p>   
                      <img id="albumCover" src={x.coverPhoto} />
                    </div>
                  </Link>
                ))}
            </main>
        </div>
    )
}

export default MyAlbums