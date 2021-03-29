import {
    CLEAR_PLAYLIST,
    IS_LOADING,
    SET_ACCOUNT_DETAILS,
    SET_CURRENT_COLOR,
    SET_CURRENT_PLAYLIST_SONGS,
    SET_CURRENT_SONG,
    SET_CURRENT_TAB,
    SET_IS_PLAYING,
    SET_MY_RECENT_PLAYED,
    SET_PLAYLIST,
    SET_USER,
    SET_IS_AUTOPLAY,
    SET_SEARCH_RESULT
} from "./actions";
import { HOME_TAB, SEARCH_TAB, LIBRARY_TAB, CURRENT_PLAYLIST } from '../constants.js'

export const initialState = {
    user: null,
    playlist: null,
    playlists: [],
    top_artists: [],
    currentPlaylistId: null,
    playing: false,
    currentSong: null,
    currentSongIndex: null,
    accountDetails: null,
    currentColor: "#212121",
    recentlyPlayed: [],
    previewSong: null,
    playingPreview: false,
    currentPlaylistSongs: null,
    currentTab: HOME_TAB,
    autoPlay: true,
    searchTxt: "",
    tabs: [
        HOME_TAB,
        SEARCH_TAB,
        LIBRARY_TAB,
        CURRENT_PLAYLIST
    ],
    searchResult: null,
    isFetching: false
}

export default (state, action) => {
    console.log(action.type);
    console.log(action.payload);
    console.log(state);
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                user: action.payload
            }
        case SET_CURRENT_SONG:
            let { id, duration_ms, album, name, popularity, artists, preview_url } = action.payload.currentSong
            let { images, release_date } = album
            let trackArtists = artists.map(res => res.name).join(", ")
            return {
                ...state,
                currentSong: {
                    id,
                    image: images[2].url,
                    trackArtists,
                    name,
                    preview_url
                },
                currentSongIndex: action.payload.index
            }
        case SET_ACCOUNT_DETAILS:
            return {
                ...state,
                accountDetails: action.payload
            }
        case SET_MY_RECENT_PLAYED:
            return {
                ...state,
                recentlyPlayed: action.payload
            }
        case SET_CURRENT_TAB:
            return {
                ...state,
                currentTab: action.payload
            }
        case IS_LOADING:
            return {
                ...state,
                isFetching: action.payload
            }
        case SET_PLAYLIST:
            return {
                ...state,
                playlist: action.payload
            }
        case CLEAR_PLAYLIST:
            return {
                ...state,
                playlist: null,
                currentColor: "#212121"
            }
        case SET_CURRENT_PLAYLIST_SONGS:
            return {
                ...state,
                currentPlaylistSongs: action.payload.songs,
                currentPlaylistId: action.payload.id
            }
        case SET_CURRENT_COLOR:
            return {
                ...state,
                currentColor: action.payload
            }
        case SET_IS_PLAYING:
            return {
                ...state,
                playing: action.payload
            }
        case SET_IS_AUTOPLAY:
            return {
                ...state,
                autoPlay: action.payload
            }
        case SET_SEARCH_RESULT:
            return {
                ...state,
                searchResult: action.payload.searchResult,
                searchTxt: action.payload.searchTxt
            }
        default:
            return state;
    }
}