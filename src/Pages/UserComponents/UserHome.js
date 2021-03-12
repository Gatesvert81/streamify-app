import React, { useContext } from 'react'
import Wrapper from '../../Component/Wrapper'
import { DisplayContentContext } from '../DisplayContext'
import FollowerSideBar from './FollowerSideBar'
import HomeExploreTab from './HomeExploreTab'
import MessagesPopup from './MessagesPopup'
import Nav from './Nav'
import NotificationPopup from './NotificationPopup'
import SearchPage from './SearchPage'
import UserProfilePop from './UserProfilePop'

function UserHome() {
    const [display, setDisplay] = useContext(DisplayContentContext)

    const handleDisplay = () => {
        if (display === 'HomeExploreTab') {
            return (
                <>
                <Wrapper  className="sidebar">
                    <FollowerSideBar />
                </Wrapper>
                <Wrapper>
                    <HomeExploreTab />
                </Wrapper>
                <Wrapper className="sidebar" >
                    <FollowerSideBar />
                </Wrapper>
                </>
            )
        } else if (display === 'SearchPage') {
            return (
                <SearchPage />
            )
        }else if ( display === 'MessagesPopup' ){
            return (
                <MessagesPopup />
            )
        }else if ( display === 'NotificationPopup') {
            return (
                <NotificationPopup />
            )
        }else if ( display === 'UserProfilePop') {
            return (
                <UserProfilePop />
            )
        } else {
            let message = 'No Page'
            return (
                message
            )
        }
    }

    return (
        <Wrapper>
            <Nav />
            <Wrapper className="homedisplay" >
                {handleDisplay()}
            </Wrapper>
        </Wrapper>
    )
}

export default UserHome
