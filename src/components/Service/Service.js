import React from 'react';
import { useParams } from "react-router"
import './Service.css';

const Service = ({ product }) => {

    const { serviceId } = useParams();

    const { name, details, img } = product;

    const handleDetails = () => {
        console.log('clicked', serviceId)
    }


    return (
        <div>
            <div className="col">
                <div className="product-card">
                    <img src={img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{details}</p>
                    </div>
                    <div className="ms-3">
                        <button onClick={handleDetails} className="btn btn-secondary">Show Details →</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;