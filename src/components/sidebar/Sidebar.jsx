import React from 'react'
import { logo } from '../../asset_links'
import { CLEAR_PLAYLIST, SET_CURRENT_TAB, SET_PLAYLIST } from '../../state/actions'
import { useStateValue } from '../../state/AppDataLayer'
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import './Sidebar.css'
import { HOME_TAB, LIBRARY_TAB, SEARCH_TAB } from '../../constants';

function Sidebar() {
    const [{ currentTab, tabs, playlist, currentSong }, dispatch] = useStateValue()

    const updateTab = tab => {

        if (playlist !== null) {
            dispatch({
                type: CLEAR_PLAYLIST
            })
        }
        dispatch({
            type: SET_CURRENT_TAB,
            payload: tab
        })
    }

    const showCurrentSong = () => {
        if (currentSong !== null) {
            return 'show'
        }
        return ''
    }

    const renderTabIcon = tab => {
        let opacity = .5
        if (currentTab === tab) {
            opacity = 1
        }
        switch (tab) {
            case HOME_TAB:
                return <HomeIcon htmlColor="white" style={{ opacity }} />
            case SEARCH_TAB:
                return <SearchIcon htmlColor="white" style={{ opacity }} />
            case LIBRARY_TAB:
                return <BookmarkBorderIcon htmlColor="white" style={{ opacity }} />
            default:
                return ''
        }
    }

    return (
        <section className="sidebar">
            <div className="sidebar__logo">
                <img src={logo} alt="" />
                <div className="title">
                    <h1>Spotify</h1>
                    <small>Clone by Jaime Bisuna</small>
                </div>
            </div>
            <div className="sidebar__options">
                {tabs.map(tab => (<div key={tab.toLowerCase()} onClick={() => updateTab(tab)} className={`option ${currentTab.toLowerCase() === tab.toLowerCase() ? 'active' : ''}`}>
                    <div className="tab">
                        <span className="icon">{renderTabIcon(tab)}</span>
                        <span className="label">{tab}</span>
                    </div>
                </div>))}
            </div>
            {/* <div className={`sidebar__currentsong ${showCurrentSong()}`}>
                <img src={currentSong === null ? '' : currentSong.image} alt="" />
            </div> */}
        </section>
    )
}

export default Sidebar
