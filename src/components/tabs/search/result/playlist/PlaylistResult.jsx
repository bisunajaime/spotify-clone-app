import React from 'react'
import SongItem from '../../../../song/SongItem'
import './PlaylistResult.css'

function PlaylistResult({ playlists }) {
    return <section className="searchresult__playlist">
        <h1>Playlists</h1>
        <div className="list">
            {playlists.map(e => {
                let { id, name, owner, images, cover, details } = e
                let artist = owner.display_name

                return <SongItem
                    key={id}
                    id={id}
                    title={name}
                    artist={artist}
                    cover={images[0].url}
                    details={e}
                />
            })}
        </div>
    </section>
}

export default PlaylistResult
