import React from 'react'
import { logo_dark, randomBackground } from '../../asset_links'
import { authorizeUrl } from '../../constants';
import { useStateValue } from '../../state/AppDataLayer';
import './AuthScreen.css'

function AuthScreen() {
    const [{ isFetching }, dispatch] = useStateValue()

    return (
        <div className="authscreen">
            <video autoPlay muted loop id="authscreen__video">
                <source src={randomBackground()} type="video/mp4" />
            </video>
            <h1>Listening is everything</h1>
            <p>Millions of songs and podcasts. No credit card needed.</p>
            <a href={authorizeUrl} className={`authscreen__link ${isFetching ? 'disabled' : ''}`}>
                <span>Login with Spotify</span>
                <img src={logo_dark} alt="logo" />
            </a>
        </div>
    )
}

export default AuthScreen
