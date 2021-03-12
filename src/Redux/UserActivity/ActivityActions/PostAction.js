import { CREATE_POST } from "./ActivityTypes"


const createPost = (data) => {
    return {
        type: CREATE_POST,
        payload: data
    }
}

export default createPost