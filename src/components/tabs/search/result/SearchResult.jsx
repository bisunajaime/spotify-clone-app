import React from 'react'
import { useStateValue } from '../../../../state/AppDataLayer'
import PlaylistResult from './playlist/PlaylistResult'
import './SearchResult.css'
import AlbumResult from './songs/AlbumResult'

function SearchResult({ playlists, albums, artists }) {
    const [{ searchResult }, dispatch] = useStateValue()
    return (
        <div className="search__searchresult">
            {/* Playlists */}
            <PlaylistResult playlists={playlists} />
            {/* Songs */}
            <AlbumResult albums={albums} />
            {/* Artists */}
        </div>
    )
}

export default SearchResult
