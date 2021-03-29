import React from 'react'
import SongItem from '../../../song/SongItem'
import './SearchResult.css'

function SearchResult({ playlists }) {
    return (
        <div className="search__searchresult">
            {/* Playlists */}
            <PlaylistResult playlists={playlists} />
            {/* Songs */}
            {/* Artists */}
        </div>
    )
}

const PlaylistResult = ({ playlists }) => {
    return <section className="searchresult__playlist">

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
    </section>
}

export default SearchResult
