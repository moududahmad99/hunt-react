import React from 'react';
import { FaLink } from 'react-icons/fa';
import './Style.css'

const Portfolio = () => {

    return (
        <React.Fragment>
            <section id="portfolio">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                            <div className="heading text-center">
                                <h3>Our Portfolio</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Loremsum has been the industry's text ever since the 1500s.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row py-5">
                        <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                            <div className="portfolio-wrapper">
                                <div className="portfolio-image">
                                    <picture>
                                        <img src="images/portfolio-1.jpg" alt="portfolio" className="w-100 img-fluid" />
                                        <div className="portfolio-overlay">
                                            <i> <FaLink /> </i>
                                        </div>
                                    </picture>
                                </div>
                                <div className="portfolio-image">
                                    <picture>
                                        <img src="images/portfolio-2.jpg" alt="portfolio" className="w-100 img-fluid" />
                                        <div className="portfolio-overlay">
                                            <i> <FaLink /> </i>
                                        </div>
                                    </picture>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                            <div className="portfolio-wrapper">
                                <div className="portfolio-image">
                                    <picture>
                                        <img src="images/portfolio-3.jpg" alt="portfolio" className="w-100 img-fluid" />
                                        <div className="portfolio-overlay">
                                            <i> <FaLink /> </i>
                                        </div>
                                    </picture>
                                </div>
                                <div className="portfolio-image">
                                    <picture>
                                        <img src="images/portfolio-4.jpg" alt="portfolio" className="w-100 img-fluid" />
                                        <div className="portfolio-overlay">
                                            <i> <FaLink /> </i>
                                        </div>
                                    </picture>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                            <div className="portfolio-wrapper">
                                <div className="portfolio-image">
                                    <picture>
                                        <img src="images/portfolio-5.jpg" alt="portfolio" className="w-100 img-fluid" />
                                        <div className="portfolio-overlay">
                                            <i> <FaLink /> </i>
                                        </div>
                                    </picture>
                                </div>
                                <div className="portfolio-image">
                                    <picture>
                                        <img src="images/portfolio-6.jpg" alt="portfolio" className="w-100 img-fluid" />
                                        <div className="portfolio-overlay">
                                            <i> <FaLink /> </i>
                                        </div>
                                    </picture>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                            <div className="portfolio-wrapper">
                                <div className="portfolio-image">
                                    <picture>
                                        <img src="images/portfolio-7.jpg" alt="portfolio" className="w-100 img-fluid" />
                                        <div className="portfolio-overlay">
                                            <i> <FaLink /> </i>
                                        </div>
                                    </picture>
                                </div>
                                <div className="portfolio-image">
                                    <picture>
                                        <img src="images/portfolio-8.jpg" alt="portfolio" className="w-100 img-fluid" />
                                        <div className="portfolio-overlay">
                                            <i> <FaLink /> </i>
                                        </div>
                                    </picture>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};

export default Portfolio;
