const noteDeletor = (id) => {
    return(dispatch,getState,{getFirebase,getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection('notes').doc(id).delete()
        .then(() => { 
        dispatch({type: 'DELETE_NOTE', id: id});

        }).catch((err)=> {
            dispatch({type: 'ERROR_DELETING_NOTE', err})
        })

    }
}

export default noteDeletor;