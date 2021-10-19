import React from 'react';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';
import './Contact.css';

const Contact = () => {
    return (
        <div className="bg-light">
            <Navigation></Navigation>
            <div className="row g-5 container mt-4 mb-5">
                <div className="col-sm-12 col-md-8">
                    <div className="row contact-form">
                        <h4>Online Appointment Form</h4>
                        <div className="col-md-6 mb-3">
                            <small>First name</small>
                            <input type="text" className="form-control" aria-label="First name" />
                        </div>
                        <div className="col-md-6 mb-3">
                            <small>Last name</small>
                            <input type="text" className="form-control" aria-label="Last name" />
                        </div>
                        <div className="col-md-6 mb-3">
                            <small>Date of birth</small>
                            <input type="date" className="form-control" aria-label="Last name" />
                        </div>
                        <div className="col-md-6 mb-3">
                            <small>SOCIAL SECURITY NUMBER</small>
                            <input type="text" className="form-control" aria-label="Last name" />
                        </div>
                        <div className="col-md-6 mb-3">
                            <small>PHONE NUMBER</small>
                            <input type="text" className="form-control" aria-label="Last name" />
                        </div>
                        <div className="col-md-6 mb-3">
                            <small>Email</small>
                            <input type="email" className="form-control" aria-label="Last name" />
                        </div>
                        <div className="form-floating mb-3">
                            <small>REASON OF APPOINTMENT</small>
                            <textarea className="form-control" id="floatingTextarea2"></textarea>
                        </div>
                    </div>
                    <button className="btn btn-secondary">Submit</button>
                </div>
                <div className="col-sm-12 col-md-4 contact-text">
                    <h4>Medicenter Clinic</h4>
                    <p>2702 Memory Lane</p>
                    <p>Chicago, IL 60605</p>
                    <p>(510) 210-5225</p>
                    <p>(510) 210-5226</p>
                    <p>Online Booking:</p>
                    <p>booking@medicenter.com</p>
                    <p>Facebook:</p>
                    <p>facebook.com/medicenter</p>
                    <p>Twitter:</p>
                    <p>twitter.com/medicenter</p>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Contact;