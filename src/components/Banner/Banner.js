import React from 'react';
import './Banner.css';
import img1 from '../../images/slide1.jpg';
import img2 from '../../images/slide2.jpg';

const Banner = () => {
    return (
        <div className="hero">
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="hero-img" src={img1} alt="..." />
                        <div className="banner carousel-caption d-none d-md-block">
                            <h1 className="hero-light">Your Future is Clear</h1>
                            <h1 className="hero-text">Ophthalmic Clinic</h1>
                            <p>Welcome to Medicenter, a professor and expert clinic for comprehensive diagnostic and modern treatment of eye diseases and vision defects in adults and children.</p>
                            <button className="btn btn-secondary">Show More →</button>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="hero-img" src={img2} alt="..." />
                        <div className="banner carousel-caption d-none d-md-block">
                            <h1 className="hero-light">The Best Specialists</h1>
                            <h1 className="hero-text">In On Place</h1>
                            <p>Welcome to Medicenter, a professor and expert clinic for comprehensive diagnostic and modern treatment of eye diseases and vision defects in adults and children.</p>
                            <button className="btn btn-secondary">Show More →</button>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Banner;