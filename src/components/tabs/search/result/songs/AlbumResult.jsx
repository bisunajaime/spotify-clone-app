import React from 'react'
import './AlbumResult.css'

function AlbumResult({ albums }) {
    return (
        <section className="albumresult">
            <h1>Albums</h1>
            <div className="albumresult__items">
                {albums.map((album, index) => <AlbumItem key={index} album={album} />)}
            </div>
        </section>
    )
}

const AlbumItem = ({ album }) => {
    console.log(album);
    return <div className="albumitem">
        <div className="image">
            <img src={album.images[1].url} alt="" />
        </div>
        <div className="label">
            <h1>{album.name}</h1>
            <span>{album.artists[0].name}</span>
        </div>
    </div>
}

export default AlbumResult
