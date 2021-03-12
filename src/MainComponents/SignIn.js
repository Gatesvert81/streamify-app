import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import Button from '../Component/Button'
import Card from '../Component/Card'
import Form from '../Component/Form'
import Input from '../Component/Input'
import Label from '../Component/Label'
import { HeadText } from '../Component/Text'
import Wrapper from '../Component/Wrapper'
import { signIn } from '../Redux/UserAuth/AuthReducers/AuthReducer'
import { isLoaded, isEmpty } from 'react-redux-firebase'

function SignIn() {
    const dispatch = useDispatch()
    const history = useHistory()

    const handleSignInSubmit = (e) => {
        e.preventDefault();
        const { email, password } = e.target.elements;

        const credential = {
            email: email.value,
            password: password.value
        }

        dispatch(signIn(credential, () => history.push("/Home")))

    }
    return (
        <Card  className="auth">
            <Wrapper>
                <Form onSubmit={handleSignInSubmit} >
                    <Wrapper className="formwrapper" >
                        <Label htmlFor="email" >Email</Label>
                        <Input type="email" placeholder="Email" name="email" />
                    </Wrapper>
                    <Wrapper className="formwrapper" >
                        <Label htmlFor="password" >Password</Label>
                        <Input type="password" placeholder="Password" name="password" />
                    </Wrapper>
                    <Wrapper>
                        <Button type="submit" className="submitbtn" >
                            Sign In
                        </Button>
                    </Wrapper>
                </Form>
            </Wrapper>
        </Card>
    )
}

export default SignIn
