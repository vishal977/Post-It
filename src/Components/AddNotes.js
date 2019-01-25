import React, { Component } from 'react'
import {connect} from 'react-redux'
import '../App.css'
import {noteMaker} from '../Redux/noteMaker.js';

class AddNotes extends Component {
    state = {
           title: '', body: ''
            
    }

    changed = (e) => {
        this.setState({
        [e.target.id]: [e.target.value]
        })
    }

    submitted = (e) =>{
        e.preventDefault();
        this.props.addNote(this.state);
        document.getElementById("title").value = "";
        document.getElementById("body").value = "";
    }

    render() {
      return (
        <div className="addnotesContainer">
            <h4 className="grey-text center">Add Notes</h4>
            <form onSubmit={this.submitted} className="addnotesForm">
                <div className="input-field">
                    <i className="material-icons prefix grey-text text-darken-3">title</i>
                    <input type="text" id="title" onChange={this.changed} value = {this.state.title}/>
                    <label htmlFor="title">Note Title</label>
                </div>
                <div className="input-field">
                    <i className="material-icons prefix grey-text text-darken-3">message</i>
                    <textarea id="body" className="materialize-textarea" onChange={this.changed} value = {this.state.body}></textarea>
                    <label htmlFor="body">Content</label>
                </div>
                <div className="input-field center">
                    <button className="btn grey darken-3">Add!</button>
                </div>
            </form>
        </div>
      )
    }
}



const mapDispatchToProps=(dispatch) => {
    return {
        addNote : (note) => { dispatch(noteMaker(note))}
    }
}

export default connect(null,mapDispatchToProps)(AddNotes);