import 'firebase/auth';
const signUserUp = (signUp) => {
    return(dispatch, getState, {getFirebase, getFirestore}) => {
        const firebase1 = getFirebase();
        const firestore = getFirestore();

        firebase1.auth().createUserWithEmailAndPassword(
            signUp.email,
            signUp.password
        ).then((res) => {
            return firestore.collection('users').doc(res.user.uid).set({
                firstname: signUp.firstname,
                lastname: signUp.lastname
            })
        }).then(() => {
            dispatch({ type: 'SIGNED_UP' })
        }).catch(err => {
            dispatch({type: 'SIGNUP_FAILED',err})
        }) ;
        
    }
}

export default signUserUp;