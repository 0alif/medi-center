import React from 'react';
import { useHistory } from 'react-router';
import useData from '../../hooks/useData';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const data = useData();
    const history = useHistory();

    const goToService = () => {
        history.push('/service')
    }
    return (
        <div className="container">
            <div className="row row-cols-sm-1 row-cols-md-2 row-cols-lg-3 g-4 m-0">
                {
                    data.map(product => <Service key={product.id} product={product}></Service>)
                }
            </div>
            <div className="d-flex justify-content-center my-5">
                <button onClick={goToService} className="btn btn-secondary">SERVICES LIST</button>
            </div>
        </div >
    );
};

export default Services;