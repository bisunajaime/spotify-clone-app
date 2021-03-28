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
    SET_USER
} from "./actions";
import { HOME_TAB, SEARCH_TAB, LIBRARY_TAB } from '../constants.js'

export const initialState = {
    user: null,
    playlist: null,
    playlists: [],
    top_artists: [],
    playing: false,
    currentSong: null,
    accountDetails: null,
    currentColor: "#212121",
    recentlyPlayed: [],
    previewSong: null,
    playingPreview: false,
    currentPlaylistSongs: null,
    currentTab: HOME_TAB,
    tabs: [
        HOME_TAB,
        SEARCH_TAB,
        LIBRARY_TAB
    ],
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
            return {
                ...state,
                currentSong: action.payload
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
                currentPlaylistSongs: action.payload
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
        default:
            return state;
    }
}