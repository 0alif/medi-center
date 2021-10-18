import React from 'react';
import { useHistory } from 'react-router';
import notFound from '../../images/not_found_.svg';

const NotFound = () => {
    const history = useHistory();
    const backToHome = () => {
        history.push('/')
    }
    return (
        <div className="App">
            <div>
                <img className="mt-5" src={notFound} alt="" width="50%" />
            </div>
            <button onClick={backToHome} className="btn btn-secondary mt-5">Back to Home</button>
        </div>
    );
};

export default NotFound;