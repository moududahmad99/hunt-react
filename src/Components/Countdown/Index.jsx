import React from 'react';
import './Style.css';
import CountUp from 'react-countup';

const Countdown = () => {
    return (
        <React.Fragment>
            <section id="countdown">
                <div className="container">
                    <div className="row justify-content-evenly">
                        <div className="col-lg-2 col-md-12 col-sm-12 col-12 text-center">
                            <div className="countdown-inner">
                                <CountUp start={0} end={230} duration={2} className="counter-up">180</CountUp>
                                <p>Total Clients</p>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-12 col-sm-12 col-12 text-center">
                            <div className="countdown-inner">
                                <CountUp start={0} end={520} duration={2} className="counter-up"></CountUp>
                                <p>Satisfied Clients</p>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-12 col-sm-12 col-12 text-center">
                            <div className="countdown-inner">
                                <CountUp start={0} end={430} duration={2} className="counter-up"></CountUp>
                                <p>Top Clients</p>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-12 col-sm-12 col-12 text-center">
                            <div className="countdown-inner">
                                <CountUp start={0} end={310} duration={2} className="counter-up"></CountUp>
                                <p>Reviewed Client</p>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-12 col-sm-12 col-12 text-center">
                            <div className="countdown-inner">
                                <CountUp start={0} end={254} duration={2} className="counter-up"></CountUp>
                                <p>Cup of Tea</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Countdown;