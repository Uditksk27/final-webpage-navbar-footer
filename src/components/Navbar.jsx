import React, {useState} from "react";
import Button from './Button';
import {Link} from 'react-router-dom'
import './Navbar.css';
import Dropdown from './Dropdown';


function Navbar() {
    const [click, setclick] = useState(false);
    const [dropdown, setdropdown] = useState(false);

    const handleClick = () => setclick(!click);
    const closeMobileMenu = () => setclick(false);

    const onMouseEnter = () => {
        if(window.innerWidth<960) {
            setdropdown(false);
        } else{
            setdropdown(true);
        }
    };
    const onMouseLeave = () => {
        if(window.innerWidth<960) {
            setdropdown(false);
        } else{
            setdropdown(false);
        }
    };

    return (
        <>
            <nav className="navbar">
                <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
                    <img src="/logo1.svg " alt="xyz"/>
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    <div className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li  className="nav-item">
                        <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>

                    <li  className="nav-item"
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}
                    >
                        <Link className="nav-links" onClick={closeMobileMenu}>
                            Services <i className="fas fa-caret-down"/> 
                        </Link>
                        {dropdown && <Dropdown/>}
                    </li>

                    <li  className="nav-item">
                        <Link  className="nav-links" onClick={closeMobileMenu}>
                            About
                        </Link>
                    </li>
                    
                    <li  className="nav-item">
                        <Link  className="nav-links" onClick={closeMobileMenu}>
                            Social
                        </Link>
                    </li>
                    <li  className="nav-item">
                        <Link  className="nav-links" onClick={closeMobileMenu}>
                            Responsibility
                        </Link>
                    </li>
                    <li  className="nav-item">
                        <Link  className="nav-links" onClick={closeMobileMenu}>
                            Contact Us
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/sign-up' className="nav-links-mobile" 
                        onClick={closeMobileMenu}>
                            Sign Up
                        </Link>
                    </li>
                </ul>
                <Button/>
            </nav>
        </>
    )
}

export default Navbar;