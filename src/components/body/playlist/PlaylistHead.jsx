import React from 'react'
import { useStateValue } from '../../../state/AppDataLayer'
import './PlaylistHead.css'

function PlaylistHead() {
    const [{ playlist }, dispatch] = useStateValue()
    const { name, id, href, owner, tracks, type, images, primary_color, description } = playlist
    const { display_name, } = owner;

    return (
        <div className="playlisthead">
            <div className="playlisthead__image">
                <img src={images[0].url} alt="playlist_img" />
            </div>
            <div className="playlisthead__details">
                <small>{type.toUpperCase()}</small>
                <h1>{name}</h1>
                <h1>{primary_color}</h1>
                <p>{description}</p>
                <p className="name">{display_name}</p>
            </div>
        </div>
    )
}

export default PlaylistHead
