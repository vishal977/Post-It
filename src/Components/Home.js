import React from 'react';
import Notes from './Notes.js'
import '../App.css'
import AddNotes from './AddNotes.js'
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

const Home = ({auth}) => {
    if(!auth.uid) return <Redirect to="/signin"/>
    return(
            <div className="row home">
                <div className="container cont">
                <div className="col s12 l6">
                    <Notes/>
                </div>
                <div className="col s12 l5 offset-l1">
                    <AddNotes/>
                </div>
                </div>
            </div>
    )
}

const mapStateToProps = (state) =>{
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(Home);