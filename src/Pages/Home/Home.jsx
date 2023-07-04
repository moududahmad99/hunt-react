import React from 'react';
import Navbar from '../../Components/Navbar/Index';
import Banner from '../../Components/Banner/Index';
import About from '../../Components/About/Index';
import Portfolio from '../../Components/Portfolio/Index';
import Service from '../../Components/Service';
import Review from '../../Components/Review/Index';
import Pricing from '../../Components/Pricing/Index';
import Countdown from '../../Components/Countdown/Index';
import Team from '../../Components/Team/Index';


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
            <Countdown />
            <Team />
        </React.Fragment>
    )
}

export default Home