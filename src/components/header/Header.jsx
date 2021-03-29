import React from 'react'
import { CLEAR_PLAYLIST } from '../../state/actions'
import { useStateValue } from '../../state/AppDataLayer'
import './Header.css'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { logo } from '../../asset_links';

function Header() {
    const [{ accountDetails, playlist }, dispatch] = useStateValue()

    const clearPlaylist = () => {
        dispatch({
            type: CLEAR_PLAYLIST,
        })
    }

    const renderAccountImage = () => {
        if (accountDetails.images.length === 0) {
            return logo
        }
        return accountDetails.images[0].url
    }

    return (
        <section className="header">
            <div className="header__navigation">
                <div className="arrow_back" onClick={playlist === null ? null : clearPlaylist}>
                    <ArrowBackIcon htmlColor="white" />
                </div>
                <div className="arrow_forward">
                    <ArrowForwardIcon htmlColor="white" />
                </div>
            </div>
            <div className="header__account_info">
                <button>UPGRADE</button>
                <div className="user">
                    <img src={renderAccountImage()} alt="profile_img" />
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
