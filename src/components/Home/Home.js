import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Footer></Footer>
        </div>
    );
};

export default Home;