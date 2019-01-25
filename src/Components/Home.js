import React from 'react';
import Notes from './Notes.js'
import '../App.css'
import AddNotes from './AddNotes.js'

const Home = () => {
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

export default Home;