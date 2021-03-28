import React from 'react'
import { HOME_TAB, LIBRARY_TAB, SEARCH_TAB } from '../../constants'
import { useStateValue } from '../../state/AppDataLayer'
import LibraryTab from '../tabs/library/LibraryTab'
import SearchTab from '../tabs/search/SearchTab'
import './Body.css'
import Playlist from './playlist/Playlist'
import RecentlyPlayed from './recently_played/RecentlyPlayed'

function Body() {
    const [{ currentTab, playlist }, dispatch] = useStateValue()

    const renderCurrentTab = () => {
        switch (currentTab) {
            case HOME_TAB:
                if (playlist !== null) {
                    return <Playlist />
                }
                return <RecentlyPlayed />
            case SEARCH_TAB:
                return <SearchTab />
            case LIBRARY_TAB:
                return <LibraryTab />
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
