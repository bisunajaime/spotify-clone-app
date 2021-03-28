import React, { useEffect } from 'react'
import SpotifyWebApi from 'spotify-web-api-js'
import { SET_CURRENT_COLOR, SET_CURRENT_PLAYLIST_SONGS, SET_PLAYLIST } from '../../state/actions'
import { useStateValue } from '../../state/AppDataLayer'
import './SongItem.css'
import * as Vibrant from 'node-vibrant'

function SongItem({ id, title, artist, cover, details }) {

    const [{ user }, dispatch] = useStateValue()

    const onPlaylistSelect = () => {


        let spotifyApi = new SpotifyWebApi();
        spotifyApi.setAccessToken(user)

        spotifyApi.getPlaylistTracks(id)
            .then(e => {
                console.log("Items");
                console.log(e.items);

                dispatch({
                    type: SET_CURRENT_PLAYLIST_SONGS,
                    payload: e.items.filter(song => song.track.preview_url !== null)
                })


                Vibrant.from(cover).getPalette()
                    .then(palette => {
                        console.log("Vibrant result: ");

                        let hex = palette.DarkVibrant.hex
                        console.log(palette.Vibrant.hex);
                        dispatch({
                            type: SET_CURRENT_COLOR,
                            payload: hex
                        })
                    }).catch(e => console.log(e))


                dispatch({
                    type: SET_PLAYLIST,
                    payload: details
                })
            })

        console.log("Playlist: ", details);
    }

    return (
        <div className="songitem" onClick={onPlaylistSelect}>
            <div className="songitem__image">
                <img src={cover} alt="image" />
            </div>
            <div className="songitem__details">
                <h4>{title}</h4>
                <span>{artist}</span>
            </div>
        </div>
    )
}

export default SongItem
