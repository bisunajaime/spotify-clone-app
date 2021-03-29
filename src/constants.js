export const clientId = "c3005d3875a94cbbb69b2a5949a7b743";
export const clientSecret = "135d0f8829ae4ea0bd199405c5eb9961";
// export const redirectUrl = `https://bisunajaime-spotifyclone.netlify.app/`;
export const redirectUrl = `http://localhost:3000/`;
export const scopes = [
    'user-read-currently-playing',
    'user-read-recently-played',
    'user-read-playback-state',
    'user-top-read',
    'user-modify-playback-state',
    'user-read-email',
    'user-read-private'
].join().replaceAll(",", "%20")
export const authorizeUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=${scopes}&redirect_uri=${redirectUrl}`

// Tabs
export const HOME_TAB = "Home";
export const SEARCH_TAB = "Search";
export const LIBRARY_TAB = "Library"
export const CURRENT_PLAYLIST = "Current Playlist"