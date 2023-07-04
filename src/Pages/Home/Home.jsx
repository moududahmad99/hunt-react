import React from 'react';
import Navbar from '../../Components/Navbar/Index';
import Banner from '../../Components/Banner/Index';
import About from '../../Components/About/Index';
import Portfolio from '../../Components/Portfolio/Index';
import Service from '../../Components/Service';
import Review from '../../Components/Review/Index';
import Pricing from '../../Components/Pricing/Index';

const Home = () => {
    return (
        <React.Fragment>
            <Navbar />
            <Banner />
            <About />
            <Portfolio />
            <Service />
            <Review />
            <Pricing />
        </React.Fragment>
    )
}

export default Home