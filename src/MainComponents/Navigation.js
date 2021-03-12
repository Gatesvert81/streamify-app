import React from 'react'
import Wrapper from '../Component/Wrapper'
import Text, { HeadText } from '../Component/Text'
import Button from '../Component/Button'
import { Link, Route, Router, Switch, useHistory } from 'react-router-dom'
import Authentication from '../Pages/Authentication'
import { createBrowserHistory } from 'history';

function Navigation() {
    let history = useHistory();
    // const history = createBrowserHistory();

    function handleClick() {
        history.push("/authentication");
      }

    return (
        <Wrapper className="nav" >
            <Wrapper>
                <HeadText className="appTitle" >
                    Walk My Dog
            </HeadText>
            </Wrapper>
            <Wrapper>
                {/* <Router history={history} > */}
                {/* <Link to="/Authentication" > */}
                    <Button className="signupBtn" onClick={handleClick} >
                        Sign Up
                    </Button>
                {/* </Link> */}
                {/* </Router> */}
            </Wrapper>
        </Wrapper>
    )
}

export default Navigation
