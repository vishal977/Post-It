import 'firebase/auth';
const SignUserIn = (details) => {
    return(dispatch, getState, {getFirebase}) => {
        const firebase1 = getFirebase();
        firebase1.auth().signInWithEmailAndPassword(
            details.email,
            details.password
        ).then(()=> {
            dispatch({type: 'LOGGED_IN'})
        }).catch((err) => {
            dispatch({type: 'LOGIN_FAILED',err});
        })
    }

}
export default SignUserIn;