import { SIGN_UP_USER } from "./AuthTypes"


const signUpUser = (credential) => {
    return {
        type: SIGN_UP_USER ,
        payload: credential
    }
}

export default signUpUser