import React from 'react'
import Card from '../Component/Card'
import Textarea from '../Component/Textarea'
import Wrapper from '../Component/Wrapper'
import UserProfileCard from './UserProfileCard'
import Button from '../Component/Button'
import { useDispatch, useSelector } from 'react-redux'
import Form from '../Component/Form'
import { post } from '../Redux/UserActivity/ActivityReducers/ActivityReducer'
import { useFirebase, useFirestore } from 'react-redux-firebase'


function PostInput() {
    const firebase = useFirebase()
    const firestore = useFirestore()
    const { uid, displayName } = useSelector(state => state.firebase.auth)

    const dispatch = useDispatch()
    // const { displayName } = useSelector(state => state.firebase.auth)

    const handlePostSubmit = (e) => {
        e.preventDefault();
        const { text } = e.target.elements;

        const credential = {
            username: displayName,
            text: text.value ,
            likes: 0 ,
            comments: []
        }

        firestore
            .collection("users")
            .doc(uid)
            .collection("posts")
            .add({
                userName: credential.username,
                text: credential.text,
                likes: credential.likes,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                // comments: credential.comments
            })
            .then((docRef) => {
                docRef.update({
                    postID: docRef.id
                })
            })

        // dispatch(post(credential))

    }

    return (
        <Card>
            <Wrapper>
                <UserProfileCard />
            </Wrapper>
            <Wrapper>
                <Form  onSubmit={handlePostSubmit}>
                <Textarea name="text">

                </Textarea>
            {/* </Wrapper>
            <Wrapper> */}
                <Button>
                    Add Photo
                </Button>
                <Button type="submit">
                    Post
                </Button>
                </Form>
            </Wrapper>
        </Card>
    )
}

export default PostInput
