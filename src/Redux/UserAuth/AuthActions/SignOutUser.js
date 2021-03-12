import { SIGN_OUT_USER } from "./AuthTypes"


const signOutUser = () => {
    return {
        type: SIGN_OUT_USER ,
    }
}

export default signOutUser