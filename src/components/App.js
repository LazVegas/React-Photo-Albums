import React from "react"
import { BrowserRouter as Router, Route } from 'react-router-dom'
import MyAlbums from './MyAlbums'
import AlbumName from './AlbumName'
import PicName from './PicName'
import '../styles/base.css'

function App() {

  return (
    <Router>
      <div>
        <Route exact path="/" component={MyAlbums} />
        <Route path="/AlbumName/:id" component={AlbumName} />
        <Route path="/PicName/:id" component={PicName} />
      </div>
    </Router>
  )
}

export default App
