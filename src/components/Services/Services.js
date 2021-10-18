import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('./fakeDB.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, []);

    return (
        <div className="container">
            <div className="row row-cols-sm-1 row-cols-md-2 row-cols-lg-3 g-4 m-0">
                {
                    data.map(product => <Service key={product.id} product={product}></Service>)
                }
            </div>
        </div >
    );
};

export default Services;