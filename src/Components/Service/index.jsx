import React from 'react';
import './Style.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { BsArrowUp, BsArrowDown } from 'react-icons/bs';

const Service = () => {
    const CustomPrevArrow = ({ onClick }) => (
        <button className="custom-arrow custom-prev" onClick={onClick}>
            <BsArrowUp />
        </button>
    );

    const CustomNextArrow = ({ onClick }) => (
        <button className="custom-arrow custom-next" onClick={onClick}>
            <BsArrowDown />
        </button>
    );

    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000,
        vertical: true,
        verticalSwiping: true,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
            },
          }
        ],
    };

    return (
        <section id="service">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-12 col-sm-12 col-12 text-center">
                        <div className="heading">
                            <h3>Our Service</h3>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Loremsum has been the industry's standard dummy text ever since the 1500s.
                            </p>
                        </div>
                    </div>
                </div>
                <Slider {...settings} className="service-slider py-5 my-5">
                    {/* Slide 1 */}
                    <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="row align-items-center flex-row-reverse">
                            <div className="col-lg-5 col-sm-12 col-12">
                                <div className="service-card service-right">
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galleye and scrambled it to make a type specimen book. It has surviven not only five centuries.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-2 col-sm-12 col-12">
                                <div className="service-img text-center">
                                    <picture>
                                        <img src="images/service-1.png" alt="service" />
                                    </picture>
                                </div>
                            </div>
                            <div className="col-lg-5 col-sm-12 col-12">
                                <div className="service-text text-end">
                                    <h3>AI Engineer</h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Slide 2 */}
                    <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="row align-items-center">
                            <div className="col-lg-5 col-sm-12 col-12">
                                <div className="service-card service-left text-end">
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galleye and scrambled it to make a type specimen book. It has surviven not only five centuries.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-2 col-sm-12 col-12">
                                <div className="service-img text-center">
                                    <picture>
                                        <img src="images/service-2.png" alt="service" />
                                    </picture>
                                </div>
                            </div>
                            <div className="col-lg-5 col-sm-12 col-12">
                                <div className="service-text text-start">
                                    <h3>Web Developer</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Slide 3 */}
                    <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="row align-items-center flex-row-reverse">
                            <div className="col-lg-5 col-sm-12 col-12">
                                <div className="service-card service-right">
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galleye and scrambled it to make a type specimen book. It has surviven not only five centuries.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-2 col-sm-12 col-12">
                                <div className="service-img text-center">
                                    <picture>
                                        <img src="images/service-1.png" alt="service" />
                                    </picture>
                                </div>
                            </div>
                            <div className="col-lg-5 col-sm-12 col-12">
                                <div className="service-text text-end">
                                    <h3>AI Engineer</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Slide 4 */}
                    <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="row align-items-center">
                            <div className="col-lg-5 col-sm-12 col-12">
                                <div className="service-card service-left text-end">
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galleye and scrambled it to make a type specimen book. It has surviven not only five centuries.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-2 col-sm-12 col-12">
                                <div className="service-img text-center">
                                    <picture>
                                        <img src="images/service-2.png" alt="service" />
                                    </picture>
                                </div>
                            </div>
                            <div className="col-lg-5 col-sm-12 col-12">
                                <div className="service-text text-start">
                                    <h3>Web Developer</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </section>
    );
}

export default Service;