import React from 'react';
import { Link } from 'react-router-dom';
import UMA from '../../assets/img/UMA_logo.png';
import samsung from '../../assets/img/Logo_Samsung.png';
import './footer.css';

const Footer = () => {
    return ( 
    <div className="footer m-5">
        <img className="w-50 m-1" src={UMA} alt="logo-UMA"/>
        <img className="w-75 m-2" src={samsung} alt="logo-samsung"/>
        <div>
            <h3>Documentation</h3>
                <li className="m-2">
                    <Link
                        className="text-dark"
                        style={{ textDecoration: 'none' }}
                        to={"//docs.google.com/document/d/196Ck2kOt6yUh7DLwheRCjO89ReJeOCvzrM822J5SluQ/edit?usp=sharing"}
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        Documentation  
                    </Link>
                </li>
                <li className="m-2 text-left">
                    <Link
                        className="text-dark"
                        style={{ textDecoration: 'none' }}
                        to={"//drive.google.com/file/d/1VmYK5WmQSW_yjhSA8TQzO3k2kCtbs5nj/view?usp=sharing"}
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        Slideshow  
                    </Link>
                </li>
        </div>
        <div>
            <h3>Contact Us</h3>
            <li>
                    <Link
                        className="text-dark"
                        style={{ textDecoration: 'none' }}
                        to={"//discord.com/channels/851873130536501249/851873131110858763"}
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        Discord Channel  
                    </Link>
                </li>
        </div>
    </div>
    );
}
 
export default Footer;