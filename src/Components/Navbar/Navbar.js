import React from 'react';
import {Link} from 'react-router-dom'
import SignedOut from './SignedOut'
import SignedIn from './SignedIn';
import {connect} from 'react-redux';
import '../../App.css'

const Navbar = (props) => 
{
    var links = <SignedOut/>
        const {signedIn} = props
        if(signedIn.uid) {
            links = <SignedIn/>
        }
    return (
        <nav className="nav-wrapper grey darken-4 navbar">
        <div className="container">
            <b><Link to="/" className="brand-logo">Post It!</Link></b>
                {links}
            </div>
            
        </nav>
        
    )
    
}

const mapStateToProps=(state) =>{
    return {
        signedIn: state.firebase.auth
    }
}

export default connect(mapStateToProps)(Navbar);