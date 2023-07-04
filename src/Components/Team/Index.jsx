import React from 'react';
import { FaSearchPlus } from 'react-icons/fa'
import { GrFacebookOption, GrLinkedinOption, GrInstagram } from 'react-icons/gr';
import { ImBehance } from 'react-icons/im'
import './Style.css'

const Team = () => {
    return (
        <section id="team">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                        <div className="heading text-center">
                            <h3>Our Team</h3>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Loremsum has been the industry's
                                standard dummy text ever since the 1500s.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-6 col-12 text-center">
                        <div className="team-card">
                            <div className="team-overlay">
                                <picture>
                                    <img src="images/hunt-team.jpg" alt="team" />
                                </picture>
                                <div className="team-overlayInner">
                                    <a href="##">
                                        <FaSearchPlus />
                                    </a>
                                </div>
                            </div>
                            <h3>Nadia Rahman</h3>
                            <p>Chairman</p>
                            <div className="team-overlayIcon">
                                <a href="##">
                                    <GrFacebookOption />
                                </a>
                                <a href="##">
                                    <GrLinkedinOption />
                                </a>
                                <a href="##">
                                    <GrInstagram />
                                </a>
                                <a href="##">
                                    <ImBehance />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-12 text-center">
                        <div className="team-card">
                            <div className="team-overlay">
                                <picture>
                                    <img src="images/hunt-team.jpg" alt="team" />
                                </picture>
                                <div className="team-overlayInner">
                                    <a href="##">
                                        <FaSearchPlus />
                                    </a>
                                </div>
                            </div>
                            <h3>Adreeta Shiekh</h3>
                            <p>Founder</p>
                            <div className="team-overlayIcon">
                                <a href="##">
                                    <GrFacebookOption />
                                </a>
                                <a href="##">
                                    <GrLinkedinOption />
                                </a>
                                <a href="##">
                                    <GrInstagram />
                                </a>
                                <a href="##">
                                    <ImBehance />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-12 text-center">
                        <div className="team-card">
                            <div className="team-overlay">
                                <picture>
                                    <img src="images/hunt-team.jpg" alt="team" />
                                </picture>
                                <div className="team-overlayInner">
                                    <a href="##">
                                        <FaSearchPlus />
                                    </a>
                                </div>
                            </div>
                            <h3>Nadia Rahman</h3>
                            <p>Chairman</p>
                            <div className="team-overlayIcon">
                                <a href="##">
                                    <GrFacebookOption />
                                </a>
                                <a href="##">
                                    <GrLinkedinOption />
                                </a>
                                <a href="##">
                                    <GrInstagram />
                                </a>
                                <a href="##">
                                    <ImBehance />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-12 text-center">
                        <div className="team-card">
                            <div className="team-overlay">
                                <picture>
                                    <img src="images/hunt-team.jpg" alt="team" />
                                </picture>
                                <div className="team-overlayInner">
                                    <a href="##">
                                        <FaSearchPlus />
                                    </a>
                                </div>
                            </div>
                            <h3>Mayesha Rahman</h3>
                            <p>Co-Founder</p>
                            <div className="team-overlayIcon">
                                <a href="##">
                                    <GrFacebookOption />
                                </a>
                                <a href="##">
                                    <GrLinkedinOption />
                                </a>
                                <a href="##">
                                    <GrInstagram />
                                </a>
                                <a href="##">
                                    <ImBehance />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Team;
