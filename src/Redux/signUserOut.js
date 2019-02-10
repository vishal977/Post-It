const signUserOut = () => {
    return(dispatch,getState, {getFirebase}) => {
        const firebase1 = getFirebase();
        firebase1.auth().signOut().then(() => {
            dispatch({type: 'SIGNED_OUT'});
        });
    }

}


export default signUserOut;