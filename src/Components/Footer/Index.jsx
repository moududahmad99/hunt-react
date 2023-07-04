import "./Style.css"
import React from 'react';
import { GrSearch, GrFacebook, GrLinkedin, GrInstagram, GrTwitter, GrPinterest, GrGlobe, GrPhone } from 'react-icons/gr';
import { ImBehance } from 'react-icons/im'
import Slider from 'react-slick';

const Footer = () => {

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                },
            },
        ],
    };

    return (
        <footer>
            <div id="brand">
                <div className="container">
                    <div className="row align-items-center justify-content-evenly brand">
                        <Slider {...settings}>
                            <div className="col-lg-2 col-md-2 col-sm-6 col-12">

                                <div className="brand-inner">
                                    <picture>
                                        <img src="images/brand-1.png" alt="brand" />
                                    </picture>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-2 col-sm-6 col-12">
                                <div className="brand-inner mx-1">
                                    <picture>
                                        <img src="images/brand-3.png" alt="brand" />
                                    </picture>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-2 col-sm-6 col-12">
                                <div className="brand-inner">
                                    <picture>
                                        <img src="images/brand-1.png" alt="brand" />
                                    </picture>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-2 col-sm-6 col-12">
                                <div className="brand-inner mx-1">
                                    <picture>
                                        <img src="images/brand-3.png" alt="brand" />
                                    </picture>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-2 col-sm-6 col-12">
                                <div className="brand-inner mx-1">
                                    <picture>
                                        <img src="images/brand-1.png" alt="brand" />
                                    </picture>
                                </div>
                            </div>

                            <div className="col-lg-2 col-md-2 col-sm-6 col-12">
                                <div className="brand-inner mx-1">
                                    <picture>
                                        <img src="images/brand-2.png" alt="brand" />
                                    </picture>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-2 col-sm-6 col-12">
                                <div className="brand-inner mx-1">
                                    <picture>
                                        <img src="images/brand-3.png" alt="brand" />
                                    </picture>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-2 col-sm-6 col-12">
                                <div className="brand-inner mx-1">
                                    <picture>
                                        <img src="images/brand-2.png" alt="brand" />
                                    </picture>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-2 col-sm-6 col-12">
                                <div className="brand-inner mx-1">
                                    <picture>
                                        <img src="images/brand-3.png" alt="brand" />
                                    </picture>
                                </div>
                            </div>

                        </Slider>
                    </div>
                </div>
            </div>
            <div className="footer-logo" id="footer">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-12 col-md-12 col-md-12 col-sm-12 col-12 text-center">
                            <picture>
                                <img src="images/footer-logo.png" alt="footer-logo" />
                            </picture>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-6 col-6 text-center">
                        <div className="footer-contact">
                            <a href="##"><GrSearch /></a>
                            <p>1234, Parkstreet Avenue Newyork City, America.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-6 text-center">
                        <div className="footer-contact">
                            <a href="##"><GrPhone /></a>
                            <p>+123 4567 564, +123 0098 7654 +99 0712 36526, +99 36842 45</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-6 text-center">
                        <div className="footer-contact">
                            <a href="##"><GrInstagram /></a>
                            <p>hunt@adminhunt.com personal-portfolio@hunt.com</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-6 text-center">
                        <div className="footer-contact">
                            <a href="##"><GrGlobe /></a>
                            <p>www.hunt-personal-port.com www.portfolio-hunt.com</p>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-12 col-sm-12 col-12 text-center">
                        <div className="footer-social">
                            <h3>Follow Us</h3>
                            <a href="##"><GrFacebook /></a>
                            <a href="##"><GrTwitter /></a>
                            <a href="##"><GrPinterest /></a>
                            <a href="##"><GrLinkedin /></a>
                            <a href="##"><ImBehance /></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
