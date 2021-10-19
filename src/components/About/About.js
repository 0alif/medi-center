import React from 'react';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';
import './About.css';
import doctor from '../../images/doctor.svg'

const About = () => {
    return (
        <div className="bg-light">
            <Navigation></Navigation>
            <div className="row my-5 container">
                <div className="col-sm-12 col-md-6">
                    <img className="img-fluid w-75" src={doctor} alt="" />
                </div>
                <div className="col-sm-12 col-md-6">
                    <h3 className="about-text">Welcome to medicenter</h3>
                    <p>Donec sed odio dui. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Duis mollis, est non commodo luctus, nisi erat porttitor.</p>
                    <h4 className="about-text">Our Motto</h4>
                    <p className="">The mind has great influence over the body and maladies often have their origin there.</p>
                    <small>— John Doe Molicere</small>
                </div>
                <div>
                    <p className="about-text h4 mt-4">Why Choose Medicenter?</p>
                    <p className="mb-3">Health cardio tellus fin amet intend morbi consectetur adipiscing forte. Nullam volutpat rutrum mode technical maecenas a velit ornare. Pharetra interdum libero vitae novum at fiber. Mauris etos vitae turpis interdum pulvinar mode... Read more →</p>
                    <p>Health cardio tellus fin amet intend morbi consectetur adipiscing forte. Nullam volutpat rutrum mode technical maecenas a velit ornare. Pharetra interdum libero vitae novum at fiber. Mauris etos vitae turpis interdum pulvinar mode… Read more →</p>
                    <p>Maecenas etos sit amet consectetur adipiscing elit ornare terminal volutpat rutrum metro amet sollicitudin interdum suspendisse pulvinar velit etos pharetra interdum, ante tellus gravida at mollis elite metro interdum. Mauris adipiscing… Read more →</p>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default About;