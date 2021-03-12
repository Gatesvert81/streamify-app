import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Redirect, useHistory } from "react-router-dom";
import Card from '../Component/Card'
import Form from '../Component/Form'
import Input from '../Component/Input'
import Label from '../Component/Label'
import { HeadText } from '../Component/Text'
import Wrapper from '../Component/Wrapper'
import Button from '../Component/Button';
import signUpUser from '../Redux/UserAuth/AuthActions/SignUpAction';
import { signUp } from '../Redux/UserAuth/AuthReducers/AuthReducer';

function SignUp() {

    const dispatch = useDispatch()
    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault();
        const { email, password, username, confirmpassword } = e.target.elements;

        const credential = {
            email: email.value,
            password: password.value,
            username: username.value,
            confirmPassword: confirmpassword.value
        }

        if ( credential.password === credential.confirmPassword) {
            console.log(credential)
            dispatch(signUp(credential, () => history.push("/Home") ))
        } else {
            alert("Please confirm password")
        }  

    }

    return (
        <Card>
            <Wrapper>
                <Form onSubmit={handleSubmit} >
                    <Wrapper className="formwrapper" >
                        <Label htmlFor="email" >Email</Label>
                        <Input type="email" placeholder="Email" name="email" />
                    </Wrapper>
                    <Wrapper className="formwrapper" >
                        <Label htmlFor="username" >Username</Label>
                        <Input type="text" placeholder="Username" name="username" />
                    </Wrapper>
                    <Wrapper className="formwrapper" >
                        <Label htmlFor="password" >Password</Label>
                        <Input type="password" placeholder="Password" name="password" />
                    </Wrapper>
                    <Wrapper className="formwrapper" >
                        <Label htmlFor="password" >Confirm Password</Label>
                        <Input type="password" placeholder="Confirm Password" name="confirmpassword" />
                    </Wrapper>
                    <Wrapper>
                        <Button type="submit" className="submitbtn">
                            Sign Up
                        </Button>
                    </Wrapper>
                </Form>
            </Wrapper>
        </Card>
    )
}

export default SignUp
