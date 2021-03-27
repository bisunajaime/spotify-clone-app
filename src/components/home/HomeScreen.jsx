import React from 'react'
import { useStateValue } from '../../state/AppDataLayer'
import Body from '../body/Body'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import Sidebar from '../sidebar/Sidebar'
import './HomeScreen.css'

function HomeScreen() {
    const [{ playlist, currentColor }, dispatch] = useStateValue()
    return (
        <section className="home" style={{ background: `linear-gradient(${currentColor}, black)` }}>
            <Header />
            <Sidebar />
            <Body />
            <Footer />
        </section>
    )
}

export default HomeScreen
