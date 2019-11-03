import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


function AlbumName (props) {
    const [picture, setPictures] = useState([])
    const [albumName, setAlbumName] = useState('')
    const id = props.match.params.id

    useEffect(() => {
        axios.get(`/albums/${id}?_embed=photos`).then(resp => {
            setAlbumName(resp.data.aName)
            setPictures(resp.data.photos)
        })
    }, [])

    return (
        <div className="albumNameContainer">
            <h1>{albumName}</h1>
            <main className="picNameContainer">
                {picture.map(x => (
                  <Link to={`/albumName/${x.id}`}>
                    <div className="picName">
                       <p>{x.photo}</p>                       
                      <img id="picCover" src={x.location} />
                    </div>
                  </Link>
                ))}
            </main>
           <aside>
                <ul>
                    {picture.map(x => (
                    <Link to={`/albumName/${x.id}`}>
                        <li>{albumName.aName}</li>
                    </Link>))}
                </ul>
            </aside>
        </div>
    )
}

export default AlbumName