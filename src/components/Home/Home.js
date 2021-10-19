import React from 'react';
import Banner from '../Banner/Banner';
import Diagnostics from '../Diagnostics/Diagnostics';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';
import Services from '../Services/Services';
import './Home.css';

const Home = () => {
    return (
        <div className="bg-light">
            <Navigation></Navigation>
            <Banner></Banner>
            <Diagnostics></Diagnostics>
            <Services></Services>
            <Footer></Footer>
        </div>
    );
};

export default Home;