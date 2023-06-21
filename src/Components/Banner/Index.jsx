import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Style.css'

function Banner() {

    const NextArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: 'block', background: 'url(path/to/next-arrow-icon.png) center/cover no-repeat' }}
                onClick={onClick}
            />
        );
    };

    const PrevArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: 'block', background: 'url(path/to/prev-arrow-icon.png) center/cover no-repeat' }}
                onClick={onClick}
            />
        );
    };

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };


    return (
        <section id="banner">
            <Slider {...settings}>
                <div className="banner-slide slider-1">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6 col-md-12 col-sm-12 col-12 text-center">
                                <div className="banner-text">
                                    <h3>We Are Creative <span>Designer</span></h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum
                                        has been the industry's standard dummy text.</p>
                                </div>
                                <div className="banner-button">
                                    <a href="##">View More</a>
                                    <a href="##">Hire Us</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="banner-slide slider-2">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6 col-md-12 col-sm-12 col-12 text-center">
                                <div className="banner-text">
                                    <h3>We Are Creative <span>Designer</span></h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum
                                        has been the industry's standard dummy text.</p>
                                </div>
                                <div className="banner-button">
                                    <a href="##">View More</a>
                                    <a href="##">Hire Us</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="banner-slide slider-3">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6 col-md-12 col-sm-12 col-12 text-center">
                                <div className="banner-text">
                                    <h3>We Are Creative <span>Designer</span></h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum
                                        has been the industry's standard dummy text.</p>
                                </div>
                                <div className="banner-button">
                                    <a href="##">View More</a>
                                    <a href="##">Hire Us</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="banner-slide slider-4">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6 col-md-12 col-sm-12 col-12 text-center">
                                <div className="banner-text">
                                    <h3>We Are Creative <span>Designer</span></h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum
                                        has been the industry's standard dummy text.</p>
                                </div>
                                <div className="banner-button">
                                    <a href="##">View More</a>
                                    <a href="##">Hire Us</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Slider>
        </section>
    );
}

export default Banner;
