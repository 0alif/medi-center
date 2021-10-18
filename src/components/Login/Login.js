import React from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';
import './Login.css';

const Login = () => {
    const { handleEmail, handlePassword, error, handleLogin } = useFirebase();


    return (
        <div className="bg-light">
            <Navigation></Navigation>
            <div className="login d-flex justify-content-center">
                <Form className="mt-5 text-center">
                    <h3 className="login">Please Login</h3>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control onBlur={handleEmail} type="email" placeholder="Email" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control onBlur={handlePassword} type="password" placeholder="Password" required />
                    </Form.Group>
                    <p className="text-danger">{error}</p>
                    <button onClick={handleLogin} className="btn button" type="submit">
                        Login
                    </button>
                    <p className="text-danger"><Link to="/register">Don't have any account?</Link></p>
                </Form>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Login;