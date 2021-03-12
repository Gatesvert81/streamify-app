import React, { useContext } from 'react'
import Icon from '../../Component/Icon'
import Input from '../../Component/Input'
import Wrapper from '../../Component/Wrapper'
import UserProfileCard from '../../MainComponents/UserProfileCard'
import { DisplayContentContext } from '../DisplayContext'

function UserProfilePop() {
    const [display, setDisplay] = useContext(DisplayContentContext)
    return (
        <Wrapper>
                <UserProfileCard />
                <UserProfileCard />
                <UserProfileCard />
                <UserProfileCard />
                <Icon onClick={() => setDisplay('UserProfilePop')}>
                    See more
                </Icon>
        </Wrapper>
    )
}

export default UserProfilePop
