import React from 'react';
import { useHistory } from 'react-router';
import './Products.css';

const Products = ({ product }) => {
    const history = useHistory();
    const { id, name, details, img } = product;
    // go to services details
    const handleDetails = () => {
        history.push(`/service/${id}`);
    }
    return (
        <div>
            <div className="col cards">
                <div className="product-cards">
                    <img src={img} className="card-img-top" alt="" />
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

export default Products;