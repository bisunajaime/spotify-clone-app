import React from 'react'
import { useStateValue } from '../../../state/AppDataLayer'
import './PlaylistBody.css'

function PlaylisyBody() {
    const [{ currentPlaylistSongs }, dispatch] = useStateValue()

    const demo = [
        {
            id: 1,
            title: "Demo 1",
            author: "Demo 1 Authro",
            album: "Firefall",
            duration: 10000
        },
        {
            id: 2,
            title: "Demo 2",
            author: "Demo 2 Authro",
            album: "Firefall",
            duration: 10000
        },
        {
            id: 3,
            title: "Demo 3",
            author: "Demo 3 Authro",
            album: "Firefall",
            duration: 10000
        },
    ]

    return (
        <div className="playlistbody glass">
            <div className="playlistbody__header">
                <span className="id">#</span>
                <span className="title">TITLE</span>
                <span className="album">ALBUM</span>
                <span className="duration">DURATION</span>
                <span className="releasedate">RELEASE DATE</span>
            </div>
            <hr />
            <div className="playlistbody__songs">
                {currentPlaylistSongs.map((e, index) => (<SongTile key={index} track={e.track} index={index} />))}
            </div>
        </div>
    )
}

const SongTile = ({ track, index }) => {
    let { duration_ms, album, name, popularity, artists } = track
    let { images, release_date, id } = album
    let trackArtists = artists.map(e => e.name).join(", ")

    return (
        <div className="song">
            <span className="id">{index + 1}</span>
            <div className="info">
                <div className="image">
                    <img src={images[2].url} alt="" />
                </div>
                <div className="important">
                    <span className="title">{name}</span>
                    <span className="author">{trackArtists}</span>
                </div>
            </div>
            <span className="album">{album.name}</span>
            <span className="duration">{duration_ms}</span>
            <span className="releasedate">{release_date}</span>
        </div>
    )
}

const MusicActions = () => {
    return (
        <section className="musicactions">
            <div className="musicactions__play"></div>
            <div className="musicactions__like"></div>
            <div className="musicactions__more"></div>
        </section>
    )
}

export default PlaylisyBody
