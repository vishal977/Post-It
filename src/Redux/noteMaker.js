export const noteMaker = (note) => {
    return(dispatch,getState,{getFirebase,getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection('notes').add({
            title: note.title,
            body: note.body,
            email: note.email
        }).then(() => {
        dispatch({type: 'ADD_NOTE', note: note});

        }).catch((err)=> {
            dispatch({type: 'ERROR_ADDING_NOTE', err})
        })

    }
}