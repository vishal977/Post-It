import React, { Component } from 'react'
import '../App.css'
import SignUp from './SignUp'
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

class SignedOutHome extends Component {
    render() {
        const {auth} = this.props;
        if(auth.uid) return <Redirect to="/"/>
      return (
            <div className = "signedout">
                <div className="parallax-container">
                    <div className="parallax">
                        <img className="img" alt="img"/>
                    </div>
                </div>
            <section className="section container" id="photos">
                <div className="row">
                    <div className="col s12 l3">
                       <h3>Sign Up</h3>
                       <p>Create your account...</p>
                    </div>
                    <div className="col s12 l8 offset-l1">
                        <SignUp/>
                    </div>
                </div>
            </section>
        </div>
                
      )
    }
}

const mapStateToProps = (state) =>{
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(SignedOutHome);