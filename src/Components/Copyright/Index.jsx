import React from 'react';
import { FaArrowUp } from 'react-icons/fa';
import "./Style.css"

const Copyright = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <section id="footer-copyright">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-12 col-sm-12 col-12 text-center align-items-center">
            <h4>
              Copyright ©
              {' '}
              {new Date().getFullYear()}
              . All rights reserved by
              {' '}
              <a href="##">HUNT</a>
              .
            </h4>
          </div>
        </div>
      </div>
      <div className="backToTopButton">
        <a href="##" onClick={handleScrollToTop}>
          <FaArrowUp />
        </a>
      </div>
    </section>
  );
};

export default Copyright;
