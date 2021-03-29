import React from 'react'
import { CURRENT_PLAYLIST, HOME_TAB, LIBRARY_TAB, SEARCH_TAB } from '../../constants'
import { useStateValue } from '../../state/AppDataLayer'
import LibraryTab from '../tabs/library/LibraryTab'
import SearchTab from '../tabs/search/SearchTab'
import './Body.css'
import Playlist from './playlist/Playlist'
import RecentlyPlayed from './recently_played/RecentlyPlayed'

function Body() {
    const [{ currentTab, playlist }, dispatch] = useStateValue()

    const renderCurrentTab = () => {
        if (playlist !== null) {
            return <Playlist />
        }
        switch (currentTab) {
            case HOME_TAB:
                return <RecentlyPlayed />
            case SEARCH_TAB:
                return <SearchTab />
            case LIBRARY_TAB:
                return <LibraryTab />
            case CURRENT_PLAYLIST:
                if (playlist === null) {
                    return <RecentlyPlayed />
                }
                return <Playlist />
            default:
                return <RecentlyPlayed />
        }
    }

    // return recently played tab default
    return (
        <section className="body">
            {renderCurrentTab()}
        </section>
    )
}

export default Body
