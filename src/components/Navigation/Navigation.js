import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light">
                <div class="container-fluid">
                    <div>
                        <span className="web-name">MediCenter</span>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <NavLink className="navigation" to="/home">Home</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink className="navigation" to="/service">Service</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink className="navigation" to="/contact">Contact</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink className="navigation" to="/about">About</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink className="nav-register" to="login">Login</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink className="nav-register" to="register">Register</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navigation;