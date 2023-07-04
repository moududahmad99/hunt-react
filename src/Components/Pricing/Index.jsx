import React from 'react'
import "./Style.css"

const Pricing = () => {
    return (
        <React.Fragment>
            <section id="pricing">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                            <div className="heading text-center">
                                <h3>Pricing Plan</h3>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem sum has been the industry's
                                    standard dummy text ever since the 1500s.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-12 col-12 text-center">
                            <div className="pricing-wrapper">
                                <div className="pricing-name">
                                    <h3>Silver</h3>
                                </div>
                                <div className="pricing-dollar">
                                    <h3>$ 29</h3>
                                    <p>Per Month</p>
                                </div>
                                <div className="pricing-package">
                                    <ul>
                                        <li>Android Application</li>
                                        <li>ios Application</li>
                                        <li>UX/UI Designs</li>
                                        <li>Wordpress Developer</li>
                                        <li>x</li>
                                    </ul>
                                </div>
                                <div className="pricing-submit">
                                    <a href="##">Join Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 col-12 text-center">
                            <div className="pricing-wrapper">
                                <div className="pricing-name">
                                    <h3>Golden</h3>
                                </div>
                                <div className="pricing-dollar">
                                    <h3>$ 69</h3>
                                    <p>Per Month</p>
                                </div>
                                <div className="pricing-package">
                                    <ul>
                                        <li>Android Application</li>
                                        <li>ios Application</li>
                                        <li>UX/UI Designs</li>
                                        <li>Wordpress Developer</li>
                                        <li>x</li>
                                    </ul>
                                </div>
                                <div className="pricing-submit">
                                    <a href="##">Join Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 col-12 text-center">
                            <div className="pricing-wrapper">
                                <div className="pricing-name">
                                    <h3>Platinum</h3>
                                </div>
                                <div className="pricing-dollar">
                                    <h3>$ 89</h3>
                                    <p>Per Month</p>
                                </div>
                                <div className="pricing-package">
                                    <ul>
                                        <li>Android Application</li>
                                        <li>ios Application</li>
                                        <li>UX/UI Designs</li>
                                        <li>Wordpress Developer</li>
                                        <li>HTML-5</li>
                                    </ul>
                                </div>
                                <div className="pricing-submit">
                                    <a href="##">Join Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </React.Fragment>
    )
}

export default Pricing