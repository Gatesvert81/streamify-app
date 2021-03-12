import { useSelector } from "react-redux"
import firebase from 'firebase'
// import { useFirestore } from "react-redux-firebase"
import { CREATE_POST, FOLLOW_USER, LIKE_POST } from "../ActivityActions/ActivityTypes"
import createPost from "../ActivityActions/PostAction"


const initialState = {}

const activityReducer = (state = initialState, action) => {
    const newState = []
    switch (action.type) {

        case CREATE_POST:
            newState = [...state]
            newState.push({ posts: [action.payload] })
            return newState

        case FOLLOW_USER:
            return state

        case LIKE_POST:
            return state

        default:
            return state
    }
}

// export const post = (credential) => {
//     return (dispatch, getState, { getFirebase, getFirestore }) => {
//         // const firebase = getFirebase()
//         const firestore = firebase.firestore()
//         const { uid, displayName } = useSelector(state => state.firebase.auth)

//         firestore
//             .collection("users")
//             .doc(uid)
//             .collection("posts")
//             .add({
//                 userName: credential.username,
//                 text: credential.text,
//                 likes: credential.likes,
//                 timestamp: firebase.firestore.FieldValue.serverTimestamp(),
//                 // comments: credential.comments
//             })
//             .then((docRef) => {
//                 docRef.update({
//                     postID: docRef.id
//                 })
//             })
//     }
// }

// export const getPosts = () => {
//     return (dispatch, getState, { getFirestore }) => {
//         const firestore = getFirestore()
//         const { uid, displayName } = useSelector(state => state.firebase.auth)

//         firestore
//             .collection("users")
//             .doc(uid)
//             .collection("posts")
//             .get()
//             .then((doc) => {
//                 const posts = doc.data()
//                 dispatch(createPost(posts))
//             })
//     }
// }

export default activityReducer