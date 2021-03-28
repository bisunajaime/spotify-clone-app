import React from 'react'
import { useStateValue } from '../../../state/AppDataLayer'
import PlaylistItem from './item/PlaylistItem'
import './PlaylistBody.css'

function PlaylisyBody() {
    const [{ currentPlaylistSongs }, dispatch] = useStateValue()

    const demo = [
        {
            id: 1,
            title: "Demo 1",
            author: "Demo 1 Authro",
            album: "Firefall",
            duration: 10000
        },
        {
            id: 2,
            title: "Demo 2",
            author: "Demo 2 Authro",
            album: "Firefall",
            duration: 10000
        },
        {
            id: 3,
            title: "Demo 3",
            author: "Demo 3 Authro",
            album: "Firefall",
            duration: 10000
        },
    ]

    return (
        <div className="playlistbody glass">
            <div className="playlistbody__header">
                <span className="id">#</span>
                <span className="title">TITLE</span>
                <span className="album">ALBUM</span>
                <span className="duration">DURATION</span>
                <span className="releasedate">RELEASE DATE</span>
            </div>
            <hr />
            <div className="playlistbody__songs">
                {currentPlaylistSongs.map((e, index) => (<PlaylistItem key={index} track={e.track} index={index} />))}
            </div>
        </div>
    )
}

export default PlaylisyBody
