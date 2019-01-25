const noteDeletor = (id) => {
    return(dispatch,getState,{getFirebase,getFirestore}) => {
        //Async Task
        const firestore = getFirestore();
        firestore.collection('notes').doc(id).delete()
        .then(() => {  //then block is executed after async task completes
        dispatch({type: 'DELETE_NOTE', id: id});

        }).catch((err)=> { //Error Message
            dispatch({type: 'ERROR_DELETING_NOTE', err})
        })

    }
}

export default noteDeletor;