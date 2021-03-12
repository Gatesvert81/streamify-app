import React, { useContext } from 'react'
import Icon from '../../Component/Icon'
import Input from '../../Component/Input'
import Wrapper from '../../Component/Wrapper'
import UserProfileCard from '../../MainComponents/UserProfileCard'
import { DisplayContentContext } from '../DisplayContext'

function SearchPage() {
    const [display, setDisplay] = useContext(DisplayContentContext)
    return (
        <Wrapper>
            <Input type="text" placeholder="Search" />
            <Wrapper>
                <UserProfileCard />
                <UserProfileCard />
                <UserProfileCard />
                <UserProfileCard />
                <Icon onClick={() => setDisplay('SearchPage') }>
                    See More
                </Icon>
            </Wrapper>
        </Wrapper>
    )
}

export default SearchPage
