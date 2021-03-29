import React from 'react'

import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import ShuffleIcon from '@material-ui/icons/Shuffle';
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
        dispatch({
            type: SET_CURRENT_SONG,
            payload: {
                currentSong: selectedSong.track,
                index: randIndex
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
                <PlayCircleFilledIcon id="playfirst" htmlColor={"#1ed760"} style={{ height: 50, width: 50 }} />
            </div>
            <ShuffleIcon id="shuffle" htmlColor="white" />
        </div>
    )
}

export default PlaylistActions
