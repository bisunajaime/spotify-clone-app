import React, { useEffect } from 'react'
import SpotifyWebApi from 'spotify-web-api-js';
import AuthScreen from './components/auth/AuthScreen'
import HomeScreen from './components/home/HomeScreen';
import { SET_ACCOUNT_DETAILS, SET_USER, SET_MY_RECENT_PLAYED, IS_LOADING } from './state/actions';
import { useStateValue } from './state/AppDataLayer';

let spotifyApi = new SpotifyWebApi();

function App() {
  const [{ user }, dispatch] = useStateValue()

  useEffect(() => {
    const windowUrl = window.location.hash;
    const accessTokenParam = windowUrl.split("&")[0];
    const _token = accessTokenParam.split("=")[1];
    if (_token) {
      console.log("token: ", user);
      spotifyApi.setAccessToken(_token)

      const fetchData = async () => {

        dispatch({
          type: IS_LOADING,
          payload: true
        })

        let fetchRecentTracks = await spotifyApi.getMyRecentlyPlayedTracks()
        dispatch({
          type: SET_MY_RECENT_PLAYED,
          payload: fetchRecentTracks
        })


        let myDetails = await spotifyApi.getMe()
        dispatch({
          type: SET_ACCOUNT_DETAILS,
          payload: myDetails
        })
        console.log(myDetails.id);

        let myPlaylists = await spotifyApi.getFeaturedPlaylists()
        console.log("Playlist: ");
        console.log(myPlaylists);
        dispatch({
          type: SET_MY_RECENT_PLAYED,
          payload: myPlaylists
        })


        dispatch({
          type: IS_LOADING,
          payload: false
        })

        await dispatch({
          type: SET_USER,
          payload: _token
        })

      }

      fetchData()

    }

  }, [])

  if (user === null) {
    return <AuthScreen />
  }

  return (
    <HomeScreen />
  )
}

export default App
