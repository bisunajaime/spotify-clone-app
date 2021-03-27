import React from 'react'
import { logo } from '../../asset_links'
import { CLEAR_PLAYLIST, SET_CURRENT_TAB, SET_PLAYLIST } from '../../state/actions'
import { useStateValue } from '../../state/AppDataLayer'
import './Sidebar.css'

function Sidebar() {
    const [{ currentTab, tabs, playlist }, dispatch] = useStateValue()

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

    return (
        <section className="sidebar">
            <div className="sidebar__logo">
                <img src={logo} alt="" />
                <h1>Spotify</h1>
            </div>
            <div className="sidebar__options">
                {tabs.map(tab => (<div key={tab.toLowerCase()} onClick={() => updateTab(tab)} className={`option ${currentTab.toLowerCase() === tab.toLowerCase() ? 'active' : ''}`}>
                    <span>{tab}</span>
                </div>))}
            </div>
        </section>
    )
}

export default Sidebar
