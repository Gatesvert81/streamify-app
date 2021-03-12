import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import Tab from '../Component/Tab';
import { HeadText } from '../Component/Text';
import Wrapper from '../Component/Wrapper'
import SignIn from '../MainComponents/SignIn'
import SignUp from '../MainComponents/SignUp'

const types = ['SignUp', 'SignIn'];
function Authentication() {
    const [active, setActive] = useState(types[0])
    let history = useHistory();
    
    function handleClick() {
        history.push("/");
      }

      

    return (
        <Wrapper>
            <HeadText onClick={handleClick} >
                Walk My Dog
            </HeadText>
            <Wrapper className="tabbutton">
                {types.map(type => (
                    <Tab
                    key={type}
                    active={active === type}
                    onClick={() => setActive(type)}>
                        {type}
                    </Tab>
                ))}
            </Wrapper>
            {active === 'SignUp' ?
                <SignUp /> :  <SignIn /> }
           
            
        </Wrapper>
    )
}

export default Authentication
