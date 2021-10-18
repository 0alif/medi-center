import React from 'react';
import './Footer.css';
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
    return (
        <div>
            <div className="footer">
                <div className="row container">
                    <div className="col-sm-12 col-md-4">
                        <h4>About Us</h4>
                        <p>At MediCenter we intend to create medicines that improve both the quality and duration of patient lives.</p>
                        <p>2702 Memory Lane</p>
                        <p>Chicago, IL 60605</p>
                        <p>(510) 210-5225</p>
                        <p>(510) 210-5226</p>
                        <p>booking@medicenter.com</p>
                    </div>
                    <div className="col-sm-12 col-md-4">
                        <h4>Latest Posts</h4>
                        <p>Many doctors use wrong test to diagnose kids food allergies</p>
                        <small>FEB 12, 2017</small>
                        <p>Rising cost of diabetes care concerns patients and doctors</p>
                        <small>JAN 15, 2017</small>
                        <p>Can breakfast help keep us thin? Nutrition science is tricky</p>
                        <small>JAN 5, 2017</small>
                    </div>
                    <div className="col-sm-12 col-md-4 ps-5 pt-5">
                        <SocialIcon className="ms-3" url="https://facebook.com/" />
                        <SocialIcon className="ms-3" url="https://twitter.com/" />
                        <SocialIcon className="ms-3" url="https://linkedin.com/" />
                    </div>
                </div>
            </div>
            <div className="row m-0 footer-bottom">
                <div className="col-sm-12 col-md-6 ps-5 pt-5">
                    <p>© 2021 MediCenter All rights reserved.
                    </p>
                </div>
                <div className="col-sm-12 col-md-6 pt-4 pb-2">
                    <span className="ms-5 ps-5">Privacy</span>
                    <span className="ms-5">Terms</span>
                    <span className="ms-5">Sitemap</span>
                </div>
            </div>
        </div>
    );
};

export default Footer;

