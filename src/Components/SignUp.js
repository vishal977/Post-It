import React, { Component } from 'react'
import '../App.css';
import {connect} from 'react-redux';
import signUserUp from '../Redux/signUserUp'

class SignUp extends Component {
  state = {
    firstname: '', lastname: '', email: '', password: ''
  }

  submitted = (e) => {
    e.preventDefault();
    this.props.signUserUp(this.state);
  }

  changed = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
    render() {
      const {authError} = this.props;
      
      return (
        <div className="container signUpCard">
        <div className=" setCardWidth ">
        <div className="signUpContainer">
            <br/>
            <form onSubmit={this.submitted} className="signUpForm">
                <div className="input-field">
                    <i className="material-icons prefix grey-text text-darken-3">edit</i>
                    <input type="text" id="firstname" onChange={this.changed}/>
                    <label htmlFor="firstname" className="grey-text text-darken-3">First Name</label>
                </div>
                <div className="input-field">
                    <i className="material-icons prefix grey-text text-darken-3">edit</i>
                    <input type="text" id="lastname" onChange={this.changed}/>
                    <label htmlFor="lastname" className="grey-text text-darken-3">Last Name</label>
                </div>
                <div className="input-field">
                    <i className="material-icons prefix grey-text text-darken-3">email</i>
                    <input type="text" id="email" onChange={this.changed}/>
                    <label htmlFor="email" className="grey-text text-darken-3">Your Email</label>
                </div>
                <div className="input-field">
                    <i className="material-icons prefix grey-text text-darken-3">lock</i>
                    <input id="password" type="password" onChange={this.changed}></input>
                    <label htmlFor="password" className="grey-text text-darken-3">Choose a Password</label>
                </div>
                <div className="input-field center">
                    <button className="btn grey darken-3">Sign Up!</button>
                </div>
                <div className="red-text center" id="message-cont">
                  {authError ? <p>{authError}</p> : null}
                </div>
            </form>
            </div>
          </div>
        </div>
      )
    }
}

const mapStateToProps=(state) => {

  return {
    signUp: state,
    authError : state.authentication.authError
  }
}

const mapDispatchToProps=(dispatch) => {
  return {
    signUserUp: (details) => dispatch(signUserUp(details))
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);