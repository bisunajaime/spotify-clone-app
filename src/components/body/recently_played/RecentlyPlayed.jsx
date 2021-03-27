import React, { useEffect } from 'react'
import { useStateValue } from '../../../state/AppDataLayer'
import SongItem from '../../song/SongItem'
import './RecentlyPlayed.css'

function RecentlyPlayed() {
    const [{ recentlyPlayed }, dispatch] = useStateValue()


    return (
        <section className="recentlyplayed">
            <h1>{recentlyPlayed.message}</h1>
            <div className="recentlyplayed__songs">
                {recentlyPlayed.playlists.items.map(e => (
                    <SongItem
                        key={e.id}
                        id={e.id}
                        title={e.name}
                        artist={e.owner.display_name}
                        cover={e.images[0].url}
                        details={e}
                    />)
                )}
            </div>
        </section>
    )
}

export default RecentlyPlayed
