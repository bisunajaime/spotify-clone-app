import React from 'react'
import { SET_CURRENT_SONG, SET_IS_PLAYING } from '../../../../state/actions'
import { useStateValue } from '../../../../state/AppDataLayer'
import './PlaylistItem.css'
import moment from 'moment'

function PlaylistItem({ track, index }) {
    const [{ currentSong }, dispatch] = useStateValue()

    let { id, duration_ms, album, name, popularity, artists, preview_url } = track
    let { images, release_date } = album
    let trackArtists = artists.map(e => e.name).join(", ")

    const setCurrentSong = () => {

        if (preview_url !== null) {
            dispatch({
                type: SET_CURRENT_SONG,
                payload: {
                    id,
                    image: images[2].url,
                    trackArtists,
                    name,
                    preview_url
                }
            })
            dispatch({
                type: SET_IS_PLAYING,
                payload: true
            })
        } else {
            alert('Preview\ not available')
        }
    }

    const renderTitleColor = () => {
        if (currentSong !== null) {
            if (currentSong.id === id) {
                return '#1ed760'
            }
        }
    }

    const renderSelectedSongBg = () => {
        if (currentSong !== null) {
            if (currentSong.id === id) {
                return 'active_bg'
            }
        }
        return ''
    }

    const renderSelectedSongTxtColor = () => {
        if (currentSong !== null) {
            if (currentSong.id === id) {
                return 'active'
            }
        }
        return ''
    }

    return (
        <div className={`song ${renderSelectedSongBg()}`} onClick={setCurrentSong}>
            <span className="id">{index + 1}</span>
            <div className="info">
                <div className="image">
                    <img src={images[2].url} alt="" />
                </div>
                <div className="important">
                    <span className="title" style={{ color: renderTitleColor() }}>{name}</span>
                    <span className="author">{trackArtists}</span>
                </div>
            </div>
            <span className={`album ${renderSelectedSongTxtColor()}`}>{album.name}</span>
            <span className={`duration ${renderSelectedSongTxtColor()}`}>{moment(duration_ms).format('mm:ss')}</span>
            <span className={`releasedate ${renderSelectedSongTxtColor()}`}>{release_date}</span>
        </div>
    )
}

export default PlaylistItem
