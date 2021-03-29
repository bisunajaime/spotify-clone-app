import React, { useState } from 'react'
import './SearchTab.css'
import SearchIcon from '@material-ui/icons/Search';
import { logo } from '../../../asset_links';
import SpotifyWebApi from 'spotify-web-api-js';
import { useStateValue } from '../../../state/AppDataLayer';
import SearchResult from './result/SearchResult';
import { SET_SEARCH_RESULT } from '../../../state/actions';

function SearchTab() {
    const [{ user, searchResult, searchTxt }, dispatch] = useStateValue()
    const [searchTerm, setSearchTerm] = useState("")
    const [isSearching, setIsSearching] = useState(false)

    const updateTxt = (e) => {
        setSearchTerm(e.target.value)
    }

    const onSearch = (e) => {
        e.preventDefault()
        if (searchTerm === null || searchTerm === "") {
            alert('Please enter search text')
            return
        }
        let spotifyApi = new SpotifyWebApi();
        spotifyApi.setAccessToken(user)
        setIsSearching(true)
        spotifyApi.search(searchTerm, ['album', 'artist', 'playlist'])
            .then(result => {
                console.log(result);
                dispatch({
                    type: SET_SEARCH_RESULT,
                    payload: {
                        searchResult: result,
                        searchTxt: searchTerm
                    }
                })
                setIsSearching(false)
            }).catch(err => {
                setIsSearching(false)
                alert('There was a problem, Please try again')
            })
    }

    const renderResults = () => {
        if (searchResult === null) return ""
        if (searchResult.playlists !== null) {
            return <SearchResult
                playlists={searchResult.playlists.items}
                artists={searchResult.artists.items}
                albums={searchResult.albums.items}
            />
        }
        return ""
    }

    return (
        <div className="search">
            <div className="search__title">
                <h1>Search</h1>
            </div>
            <div className="search__bar">
                <div className="icon">
                    <SearchIcon htmlColor="black" fontSize="large" />
                </div>
                <form className="search__form" onSubmit={onSearch}>
                    <input value={searchTerm} onChange={updateTxt} autoComplete="false" type="text" name="search" id="search" placeholder="Search songs, artists, playists..." />
                </form>
                <img src={logo} alt="" onClick={onSearch} />
            </div>
            <div className="search__showresultslabel">
                <small>Showing results for "{searchTerm}"</small>
            </div>
            {renderResults()}
        </div>
    )
}

export default SearchTab
