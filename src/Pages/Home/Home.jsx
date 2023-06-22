import React from 'react'
import Navbar from '../../Components/Navbar/Index'
import Banner from '../../Components/Banner/Index'
import About from '../../Components/About/Index'

const Home = () => {
    return (
        <React.Fragment>
            <Navbar />
            <Banner />
            <About />
        </React.Fragment>
    )
}

export default Home