import React from 'react'
import PlaylistItem from '../body/playlist/item/PlaylistItem'

function PlaylistsComponent({ playlist }) {
    return (
        <section className="playlistcomponent">
            {playlist.map((e, index) => <PlaylistItem track={e} index={index} key={e.id} />)}
        </section>
    )
}

export default PlaylistsComponent
