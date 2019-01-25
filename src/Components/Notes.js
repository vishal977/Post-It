import React from 'react'
import Pin from '../Images/pin.png'
import '../index.css'
import {connect} from 'react-redux';
import '../App.css'
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';
import noteDeletor from '../Redux/noteDeletor'



class Notes extends React.Component {
   
    
    render(){
        const {note} = this.props;
        var arr = [];
        for (var key in note) {
            arr.push(note[key]);
        }
        console.log(arr.length);
        const notes = arr.length ?
        (
            arr.map(arr => 
            {
            return ( 
                <div className="card yellow lighten-2 notes center z-depth-2" key={arr.id}>
                    <div className="card-image noteswrap">
                        <img className = "pinimg" src={Pin} alt="Pin"/>
                    </div>
                    <div className="card-title black-text">
                        <span><b>{arr.title}</b></span> <br/>
                    </div>
                    <div className="card-content">
                    <span>{arr.body}</span> <br/>
                    </div>
                    <div className="card-action">
                        <a className="btn-floating waves-effect waves-dark yellow lighten-2" id="delete" onClick = {()=>{this.clicked(arr.id)}}>
                            <i className="material-icons grey-text text-darken-3">delete</i>
                        </a>
                    </div>
                </div>
                )
            })
        ):
        (       
                <div className="error">
                    <h3>No Notes yet!</h3>
                </div>
        )

         return(
            <div className="notes">
                {notes}
             </div>
         )
        
            }   
            
    clicked = (clickedID) => {
         this.props.deleteNote(clickedID);
     }
       
}

const mapStateToProps = (state) => {
    return{
        note: state.firestore.ordered.notes
    }
    
}
const mapDispatchToProps=(dispatch) => {
    return {
        deleteNote: (id) => { dispatch(noteDeletor(id))}
    }
}


export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    firestoreConnect([
        {collection: 'notes'}
    ]))(Notes);