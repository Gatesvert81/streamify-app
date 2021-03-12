import { getFirebase } from "react-redux-firebase";
import { SIGN_IN_USER, SIGN_UP_USER } from "../AuthActions/AuthTypes";
import signInUser from "../AuthActions/SignInUser";
import signUpUser from "../AuthActions/SignUpAction";

const initialState = {}


const authReducer = (state = initialState, action) => {
    switch (action.type) {

        case SIGN_UP_USER:
            console.log('User signed Up')
            return state
        case SIGN_IN_USER:
            console.log('User signed In')
            return state

        default:
            return state
    }
}



export const signUp = (credential, callback) => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();

        firebase
            .createUser({
                email: credential.email,
                password: credential.password
            })
            .then((userCredential) => {
                const user = firebase.auth().currentUser;
                user.updateProfile({
                    displayName: credential.username
                })
                console.log(userCredential)
                dispatch(signUpUser()) 
                callback()
            })
            .catch(err => {
                alert(err.message)
            })
    }
}

export const signIn = (credential, callback) => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();

        firebase
            .login({
                email: credential.email,
                password: credential.password
            })
            .then((userCredential) => {
                console.log(firebase.auth().currentUser)
                dispatch(signInUser())
                callback()
            })
            .catch(err => {
                alert(err.message)
            })
    }
}

export default authReducer
