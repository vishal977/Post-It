import React from 'react';
import {Link} from 'react-router-dom'

const Navbar = () => 
{
    return (
        <nav className="nav-wrapper grey darken-4">
            <div className="container">
                    <b><Link to="/" className="brand-logo">Post It!</Link></b>
                    <a href="" className="sidenav-trigger" data-target="mobile-links">
                        <i className="material-icons">menu</i>
                    </a>
            <ul className="right hide-on-med-and-down">
                <li><Link to="/">Home</Link>></li>
                <li> <Link to="/contact">Contact</Link></li>
            </ul>
            </div>
            <ul className="sidenav" id="mobile-links">
            <li><Link to="/" >Home</Link></li>
            <li> <Link to="/contact">Contact</Link></li>
        </ul>

        </nav>
        
    )
    
}

export default Navbar;