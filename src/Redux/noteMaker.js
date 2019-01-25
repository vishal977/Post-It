export const noteMaker = (note) => {
    return(dispatch,getState,{getFirebase,getFirestore}) => {
        //Async Task
        const firestore = getFirestore();
        firestore.collection('notes').add({
            title: note.title,
            body: note.body
        }).then(() => {  //then block is executed after async task completes
        dispatch({type: 'ADD_NOTE', note: note});

        }).catch((err)=> { //Error Message
            dispatch({type: 'ERROR_ADDING_NOTE', err})
        })

    }
}