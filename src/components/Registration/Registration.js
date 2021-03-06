import React from 'react';
import './Registration.css';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import useAuth from '../../hooks/useAuth';
import google from '../../images/search.png';
import fb from '../../images/facebook.png';

const Registration = () => {
    const { handleEmail, handlePassword, handleRegister, error, signInUsingGoogle, signInUsingFacebook } = useAuth();
    return (
        <div className="bg-light">
            <Navigation></Navigation>
            <div className="d-flex justify-content-center mb-4">
                <Form className="mt-5 text-center">
                    <h3 className="register">Please Register</h3>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Control type="text" placeholder="Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control onBlur={handleEmail} type="email" placeholder="Email" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control onBlur={handlePassword} type="password" placeholder="Password" required />
                    </Form.Group>
                    <p className="text-danger">{error}</p>
                    <button onClick={handleRegister} className="btn button" type="submit">
                        Sign in
                    </button>
                    <p className="text-danger"><Link to="/login">Already have an account?</Link></p>
                    <img onClick={signInUsingGoogle} className="icon" src={google} alt="" />
                    <img onClick={signInUsingFacebook} className="icon" src={fb} alt="" />
                </Form>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Registration;