import React from 'react'
import { useStateValue } from '../../../state/AppDataLayer'
import PlaylistActions from './actions/PlaylistActions'
import PlaylistItem from './item/PlaylistItem'
import './PlaylistBody.css'

function PlaylisyBody() {
    const [{ currentPlaylistSongs }, dispatch] = useStateValue()

    return (
        <div className="playlistbody glass">
            <PlaylistActions />
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
