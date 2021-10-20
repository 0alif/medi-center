import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Navigation.css';

const Navigation = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <div>
                        <span className=""><Link to="/" className="web-name">MediCenter</Link></span>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="navigation" to="/home">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="navigation" to="/service">Service</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="navigation" to="/contact">Contact</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="navigation" to="/about">About</NavLink>
                            </li>
                            {user.email ? <li className="nav-item">
                                <span className="me-3 h5">{user?.displayName}</span>
                                <button onClick={logOut} className="btn btn-sm btn-outline-danger rounded-pill">Log out</button>
                            </li> : <li className="nav-item">
                                <NavLink className="nav-register" to="login">Login</NavLink>
                            </li>}
                            {!user.email && <li className="nav-item">
                                <NavLink className="nav-register" to="register">Register</NavLink>
                            </li>}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navigation;