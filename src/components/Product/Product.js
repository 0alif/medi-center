import React from 'react';
import useData from '../../hooks/useData';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';
import Products from '../Products/Products';

const Product = () => {
    const data = useData();
    return (
        <div className="bg-light">
            <Navigation></Navigation>
            <div className="mb-5">
                <h3 className="ms-4 mt-5" style={{ color: "#444F61" }}>Our Services</h3>
                <div className="row row-cols-sm-1 row-cols-md-2 row-cols-lg-3 g-4 m-0">
                    {
                        data.map(product => <Products key={product.id} product={product}></Products>)
                    }
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Product;