import React from "react";
import { Link } from "react-router-dom";
import './Footer.css';
import { FaWhatsapp } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';

function Footer() {
    return(
        <div className="box">
            <ul className="footer-menu">
                <li className="footer item">
                    <Link  className="footer-link">
                        Contact Us 
                    </Link>
                </li>
                <li>
                    <Link  className="footer-link">
                        <FaWhatsapp /> +9198966xxxxxx 
                    </Link>
                </li>
                <li>
                    <Link className="footer-link">
                        <FaEnvelope /> abcd1234@hotmail.com  
                    </Link>
                </li>
                    
                    
                
            </ul>
                
        </div>
    );
}

export default Footer;
