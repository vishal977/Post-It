import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class SignedOut extends Component {
    render() {
      return (
        <ul className="right ">
            <li>
                <a href="/signup">
                Sign Up
                </a>
            </li>
            <li>
                <Link to="/contact">
                Contact Us
                </Link>
            </li>
            <li>
                <Link to="/signin">
                Sign In
                </Link>
            </li>
            
        </ul>
      )
    }
}

export default SignedOut;