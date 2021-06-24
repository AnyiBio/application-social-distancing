import React from 'react';
import UMA from '../../assets/img/UMA_logo.png';
import samsung from '../../assets/img/Logo_Samsung.png';
import './footer.css';

const Footer = () => {
    return ( 
    <div className="footer d-flex justify-content-around mt-5">
        <div className="d-flex flex-column">
            <img className="w-25 m-1" src={UMA} alt="logo-UMA"/>
            <img className="w-25 m-2" src={samsung} alt="logo-samsung"/>
        </div>
        <div>
            <h3>Documentation</h3>
        </div>
        <div>
            <h3>Contact Us</h3>
        </div>
    </div>
    );
}
 
export default Footer;