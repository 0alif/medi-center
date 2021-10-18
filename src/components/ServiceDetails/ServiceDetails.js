import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';
import './ServiceDetails.css';

const ServiceDetails = () => {
    const [item, setItem] = useState([]);
    const { serviceId } = useParams();

    // load data from public folder as fakeDB
    useEffect(() => {
        fetch('/fakeDB.json')
            .then(res => res.json())
            .then(data => {
                const products = data.find(product => product.id == serviceId)
                setItem(products)
            })
    }, [serviceId]);
    return (
        <div className="bg-light">
            <Navigation></Navigation>
            <div className="row container my-5">
                <div className="col-sm-12 col-md-6">
                    <img className="img-fluid" src={item.img} alt="" />
                    <h5>{item.name}</h5>
                    <p>{item.details}</p>
                </div>
                <div className="details col-sm-12 col-md-6">
                    <h5>Simply walk in</h5>
                    <h4>{item.description}</h4>
                    <p>{item.moreDetail}</p>
                    <p className="mt-5">➜ Medicenter is a people centered environment – which means you are at the center of everything we do and every decision we make.</p>
                    <p>➜ We are your partner for health, helping your live well by bringing the best in medicine and healthcare to your door.</p>
                    <p>➜ We provide fast, effective and affordable immediate care for non-life threatening illnesses. Most patients are seen, treated and released in about 60 minutes.</p>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ServiceDetails;