import React from 'react'
import { CLEAR_PLAYLIST } from '../../state/actions'
import { useStateValue } from '../../state/AppDataLayer'
import './Header.css'

function Header() {
    const [{ accountDetails, playlist }, dispatch] = useStateValue()

    const clearPlaylist = () => {
        dispatch({
            type: CLEAR_PLAYLIST,
        })
    }

    return (
        <section className="header">
            <div className="header__navigation">
                <div className="arrow_back" onClick={playlist === null ? null : clearPlaylist}>
                    {/* <svg role="img" focusable="false" height="24" width="24" viewBox="0 0 24 24" ><polyline points="16 4 7 12 16 20" fill="none" stroke="#181818"></polyline></svg> */}
                </div>
                <div className="arrow_forward"></div>
            </div>
            <div className="header__account_info">
                <button>UPGRADE</button>
                <div className="user">
                    <img src={accountDetails.images[0].url} alt="profile_img" />
                    <span>{accountDetails.display_name}</span>
                    <div className="arrow_down">
                        <svg role="img" height="16" width="16" viewBox="0 0 16 16" fill="white"><path d="M3 6l5 5.794L13 6z"></path></svg>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Header
