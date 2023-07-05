import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Style.css';

const Review = () => {

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
              },
            }
          ],
    };

    const settings2 = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        autoplay: true,
        autoplaySpeed: 5000
    };

    return (
        <section id="review">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-2 col-md-12 col-sm-12 col-12">
                        <div className="review-users">
                            <Slider {...settings}>
                                <div className="review-users-inner">
                                    <picture>
                                        <img src="images/review-1.png" alt="service" />
                                    </picture>
                                </div>
                                <div className="review-users-inner">
                                    <picture>
                                        <img src="images/review-2.png" alt="service" />
                                    </picture>
                                </div>
                                <div className="review-users-inner">
                                    <picture>
                                        <img src="images/review-1.png" alt="service" />
                                    </picture>
                                </div>
                                <div className="review-users-inner">
                                    <picture>
                                        <img src="images/review-2.png" alt="service" />
                                    </picture>
                                </div>
                            </Slider>
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-12 col-sm-12 col-12">
                        <div className="review-desc">
                            <Slider {...settings2}>
                                <div className="review-desc-inner justify-content-center">
                                    <h3>Sacheverell</h3>
                                    <h4>Chairman/Ceo</h4>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                        industry's ardy text ever since the has survived not only five centuries, but also the leap into
                                        electronic typesetting, remaining essentially changed. orem Ipsum is simply dummy text of the
                                        printing.
                                    </p>
                                </div>
                                <div className="review-desc-inner">
                                    <h3>Methuselah</h3>
                                    <h4>Leader</h4>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                        industry's ardy text ever since the has survived not only five centuries, but also the leap into
                                        electronic typesetting, remaining essentially changed. orem Ipsum is simply dummy text of the
                                        printing.
                                    </p>
                                </div>
                                <div className="review-desc-inner">
                                    <h3>Toirdhealbhach</h3>
                                    <h4>Team Head</h4>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                        industry's ardy text ever since the has survived not only five centuries, but also the leap into
                                        electronic typesetting, remaining essentially changed. orem Ipsum is simply dummy text of the
                                        printing.
                                    </p>
                                </div>
                                <div className="review-desc-inner">
                                    <h3>Cassiopeia</h3>
                                    <h4>Marketing Officer</h4>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                        industry's ardy text ever since the has survived not only five centuries, but also the leap into
                                        electronic typesetting, remaining essentially changed. orem Ipsum is simply dummy text of the
                                        printing.
                                    </p>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Review;
