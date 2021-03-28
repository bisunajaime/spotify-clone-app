import React from 'react'

import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import { useStateValue } from '../../../../state/AppDataLayer';
import { SET_CURRENT_SONG, SET_IS_PLAYING } from '../../../../state/actions';

import './PlaylistActions.css';

function PlaylistActions() {
    const [{ playing, currentPlaylistSongs }, dispatch] = useStateValue()

    const playRandomSongFromPlaylist = () => {
        const min = 0
        const max = currentPlaylistSongs.length - 1
        const randIndex = Math.round(Math.random() * (max - min) + min);

        const selectedSong = currentPlaylistSongs[randIndex]

        let { id, album, name, artists, preview_url } = selectedSong.track
        let { images } = album
        let trackArtists = artists.map(e => e.name).join(", ")

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
    }

    const controlMusicState = () => {
        // Play random song
        const player = document.getElementById('player')
        if (playing) {
            dispatch({
                type: SET_IS_PLAYING,
                payload: false
            })
            player.pause()
        } else {
            dispatch({
                type: SET_IS_PLAYING,
                payload: true
            })
            player.play()
        }
    }

    return (
        <div className="playlistactions">
            <div className="playlistactions__playbtn" onClick={playRandomSongFromPlaylist}>
                <PlayCircleFilledIcon htmlColor={"#1ed760"} style={{ height: 50, width: 50 }} />
            </div>
        </div>
    )
}

export default PlaylistActions
