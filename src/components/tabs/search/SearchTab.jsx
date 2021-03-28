import React, { useState } from 'react'
import './SearchTab.css'
import SearchIcon from '@material-ui/icons/Search';
import { logo } from '../../../asset_links';

function SearchTab() {
    const [searchTxt, setSearchTxt] = useState("")

    const updateTxt = (e) => {
        setSearchTxt(e.target.value)
        console.log(searchTxt);
        // add searchTerm in state
        // onSearchevent dispatch and update state
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
                <input value={searchTxt} onChange={updateTxt} autoComplete={false} type="text" name="search" id="search" placeholder="Search songs, artists, playists..." />
                <img src={logo} alt="" />
            </div>
            <div className="search__showresultslabel">
                <small>Showing results for "{searchTxt}"</small>
            </div>
        </div>
    )
}

export default SearchTab
