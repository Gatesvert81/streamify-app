import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFirestoreConnect } from 'react-redux-firebase'
import { getFirestore } from 'redux-firestore'
import Wrapper from '../../Component/Wrapper'
import PostCard from '../../MainComponents/PostCard'
import { getPosts } from '../../Redux/UserActivity/ActivityReducers/ActivityReducer'

function HomePost() {

    const dispatch = useDispatch()

    const { uid } = useSelector(state => state.firebase.auth)
    useFirestoreConnect({
        collection: `user`,
        doc: uid,
        sub
        // storeAs: "posts",
    })
    console.log(uid)
    const { uid } = useSelector(state => state.firestore.data)
    
    // const firestore = getFirestore()

    // firestore
    //     .collection("users")
    //     .doc(uid)
    //     // .get()
    //     .onSnapshot((doc) => {
    //         const posts = doc
    //         // dispatch(createPost(posts))
    //         console.log({posts})
    //     })

    return (
        <Wrapper className="homepost">
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
        </Wrapper>
    )
}

export default HomePost
