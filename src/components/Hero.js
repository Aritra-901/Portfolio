import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-container container">
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I'm <span className="text-gradient">Aritra Sarkar</span>
          </h1>
          <div className="hero-roles">
            <span className="role">FRONT-END DEVELOPER</span>
            <span className="role">BACK-END DEVELOPER</span>
            <span className="role">FULL-STACK DEVELOPER</span>
          </div>
          <div className="hero-social">
            <h4>FIND WITH ME</h4>
            <div className="social-links">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-image-wrapper">
            <div className="image-placeholder">
              <i className="fas fa-user"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
