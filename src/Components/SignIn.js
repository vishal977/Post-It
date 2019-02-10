import React, { Component } from 'react'
import '../App.css';
import notesCover from '../Images/notesCover.jpg'
import SignUserIn from '../Redux/SignUserIn'
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

class SignIn extends Component {

  state = {
    email: '',password: ''
  }

  submitted = (e) => {
    e.preventDefault();
    this.props.SignUserIn(this.state);
  }

  changed = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
    render() {
      const {auth} = this.props;
        if(auth.uid) return <Redirect to="/"/>
      const {authError} = this.props
      return (
        <div className="container signInCard">
          <div className="card setCardWidth">
            <div className="card-image">
              <img src={notesCover} alt="Notes"/>
            </div>
          <div className="signInContainer card-content">
              <h4 className="grey-text card-title">Sign In</h4>
              <form onSubmit={this.submitted} className="signInForm">
                  <div className="input-field">
                      <i className="material-icons prefix grey-text text-darken-3">email</i>
                      <input type="text" id="email" onChange={this.changed}/>
                      <label htmlFor="email">Email</label>
                  </div>
                  <div className="input-field">
                      <i className="material-icons prefix grey-text text-darken-3">lock</i>
                      <input id="password" type="password" onChange={this.changed}></input>
                      <label htmlFor="password">Password</label>
                  </div>
                  <div className="input-field center card-action">
                      <button className="btn grey darken-3">Sign In!</button>
                  </div>
                  <div className="red-text center">
                    {authError? <p>Login Failed</p> : null}
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
    authError: state.authentication.authError,
    auth: state.firebase.auth
  }
}

const mapDispatchToProps=(dispatch) => {
  return {
    SignUserIn: (details) => dispatch(SignUserIn(details))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);