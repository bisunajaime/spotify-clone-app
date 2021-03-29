import React from 'react'
import { logo } from '../../asset_links'
import { CLEAR_PLAYLIST, SET_CURRENT_TAB, SET_PLAYLIST } from '../../state/actions'
import { useStateValue } from '../../state/AppDataLayer'
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import './Sidebar.css'
import { CURRENT_PLAYLIST, HOME_TAB, LIBRARY_TAB, SEARCH_TAB } from '../../constants';

function Sidebar() {
    const [{ currentTab, tabs, playlist, currentSong, recentlyPlayed, currentColor }, dispatch] = useStateValue()

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
        let currTab = currentTab.replace(" ", "").toLowerCase()
        if (currTab === tab.replace(" ", "").toLowerCase()) {
            opacity = 1
        }
        switch (tab) {
            case HOME_TAB:
                return <HomeIcon htmlColor="white" style={{ opacity }} />
            case SEARCH_TAB:
                return <SearchIcon htmlColor="white" style={{ opacity }} />
            case LIBRARY_TAB:
                return <BookmarkBorderIcon htmlColor="white" style={{ opacity }} />
            case CURRENT_PLAYLIST:
                return <MusicNoteIcon htmlColor="white" style={{ opacity }} />
            default:
                return ''
        }
    }

    const showPlaylistTab = tab => {
        if (tab === CURRENT_PLAYLIST) {
            if (playlist === null) {
                return 'hide'
            }
        }
        return ''
    }

    return (
        <section className="sidebar">
            <div className="sidebar__logo">
                {/* <img src={logo} alt="" /> */}
                <svg width="50" height="50" viewBox="0 0 600 600" fill="green" xmlns="http://www.w3.org/2000/svg">
                    <path d="M457.408 269.405C371.45 218.356 229.665 213.664 147.607 238.568C134.426 242.566 120.493 235.129 116.503 221.951C112.509 208.765 119.939 194.839 133.125 190.834C227.324 162.242 383.91 167.764 482.867 226.505C494.722 233.543 498.605 248.85 491.581 260.681C484.55 272.534 469.23 276.443 457.405 269.405H457.408ZM454.592 345.012C448.562 354.799 435.766 357.868 425.993 351.859C354.334 307.811 245.055 295.048 160.272 320.784C149.279 324.103 137.665 317.908 134.326 306.932C132.734 301.655 133.3 295.963 135.899 291.103C138.498 286.243 142.918 282.611 148.19 281.005C245.04 251.613 365.444 265.847 447.752 316.43C457.525 322.448 460.601 335.249 454.592 345.012ZM421.962 417.624C420.826 419.49 419.333 421.113 417.57 422.401C415.806 423.689 413.805 424.617 411.682 425.13C409.56 425.644 407.356 425.734 405.199 425.395C403.041 425.057 400.971 424.295 399.108 423.156C336.489 384.884 257.669 376.241 164.845 397.444C162.719 397.93 160.517 397.993 158.366 397.628C156.215 397.263 154.156 396.478 152.309 395.318C150.461 394.158 148.86 392.645 147.597 390.865C146.334 389.086 145.435 387.076 144.949 384.949C144.46 382.821 144.395 380.618 144.759 378.465C145.123 376.312 145.908 374.253 147.069 372.404C148.229 370.555 149.744 368.953 151.525 367.691C153.305 366.428 155.318 365.529 157.447 365.045C259.026 341.826 346.159 351.819 416.447 394.769C418.31 395.907 419.931 397.401 421.217 399.166C422.503 400.931 423.428 402.931 423.94 405.054C424.453 407.176 424.542 409.379 424.203 411.536C423.864 413.693 423.103 415.762 421.964 417.624H421.962ZM299.662 33C152.393 33 33 152.388 33 299.662C33 446.95 152.393 566.333 299.664 566.333C446.943 566.333 566.333 446.95 566.333 299.662C566.333 152.391 446.945 33 299.664 33" fill={currentColor === "#212121" ? "#1ED760" : currentColor} />
                </svg>

                <div className="title">
                    <h1>Spotify</h1>
                    <small>Clone by Jaime Bisuna</small>
                </div>
            </div>
            <div className="sidebar__options">
                {tabs.map(tab => {
                    return (<div key={tab.toLowerCase()} onClick={() => updateTab(tab)} className={`option ${currentTab.toLowerCase() === tab.toLowerCase() ? 'active' : ''} ${showPlaylistTab(tab)}`}>
                        <div className={`tab`}>
                            <span className="icon">{renderTabIcon(tab)}</span>
                            <span className="label">{tab}</span>
                        </div>
                    </div>)
                })}
            </div>
            {/* <div className={`sidebar__currentsong ${showCurrentSong()}`}>
                <img src={currentSong === null ? '' : currentSong.image} alt="" />
            </div> */}
        </section>
    )
}

export default Sidebar
