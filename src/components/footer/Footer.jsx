import React, { useState } from 'react'
import ReactAudioPlayer from 'react-audio-player'
import { useStateValue } from '../../state/AppDataLayer'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import './Footer.css'
import { SET_IS_PLAYING } from '../../state/actions';

function Footer() {
    const [{ currentSong, playing }, dispatch] = useStateValue()
    const [volume, setVolume] = useState(1)

    if (currentSong === null) {
        return <section className="footer">
            <div className="footer__current_song">
                {/* <img src="" alt=""/> */}
            </div>
        </section>
    }

    const controlMusicState = () => {
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

    const renderVolumeColor = () => {
        let vol = volume * 100
        console.log(vol);
        if (vol === 0) {
            return 'mute'
        } else if (vol > 0 && vol < 25) {
            return 'low'
        } else if (vol > 25 && vol < 50) {
            return 'med'
        } else if (vol > 50 && vol < 75) {
            return 'mid'
        } else if (vol > 75 && vol <= 100) {
            return 'max'
        } else {
            return ''
        }


    }

    return (
        <section className="footer">
            <div className="footer__current_song">
                <img src={currentSong.image} alt="" />
                <div className="details">
                    <span className="name">{currentSong.name}</span>
                    <span className="artists">{currentSong.trackArtists}</span>
                </div>
            </div>
            <div className="footer__player">
                {/* PLAYER HERE */}
                <ReactAudioPlayer
                    src={currentSong.preview_url}
                    autoPlay
                    controls
                    loop
                    onVolumeChanged={e => setVolume(e.target.volume)}
                    volume={volume}
                    id="player"
                />
                <div className="custom_player">
                    <div className="icons">
                        <div className="prev">
                            <SkipPreviousIcon htmlColor='white' className="skipbutton" stye={{ height: 20, width: 20 }} />
                        </div>
                        <div className="play" onClick={controlMusicState} >
                            {
                                playing ?
                                    <PauseCircleOutlineIcon htmlColor='white' style={{ height: 40, width: 40 }} /> :
                                    <PlayCircleFilledIcon htmlColor='white' style={{ height: 40, width: 40 }} />
                            }
                        </div>
                        <div className="next">
                            <SkipNextIcon htmlColor='white' className="nextbutton" stye={{ height: 20, width: 20 }} />
                        </div>
                    </div>
                    <div className="duration">
                        {/* <input type="range" name="duration" id="duration" /> */}
                    </div>
                </div>
            </div>
            <div className="footer__volume">
                {/* VOLUME */}
                <input type="range" name="volume" className={renderVolumeColor()} id="volume" onChange={e => setVolume(e.target.value / 100)} value={volume * 100} min={0} max={100} />
            </div>
        </section>
    )
}

export default Footer
