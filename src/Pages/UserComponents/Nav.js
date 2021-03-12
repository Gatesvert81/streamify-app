import React, { useContext } from 'react'
import Icon from '../../Component/Icon'
import SearchIcon from '@material-ui/icons/Search'
import QuestionAnswerOutlinedIcon from '@material-ui/icons/QuestionAnswerOutlined';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Text from '../../Component/Text'
import Wrapper from '../../Component/Wrapper'
import Avatar from '../../Component/Avatar';
import PopupComp from '../../MainComponents/PopupComp';
import SearchPage from './SearchPage';
import MessagesPopup from './MessagesPopup';
import { DisplayContentContext } from '../DisplayContext';
import NotificationPopup from './NotificationPopup';
import UserProfilePop from './UserProfilePop';

function Nav() {
    const [display, setDisplay] = useContext(DisplayContentContext)
    return (
        <Wrapper className="usernav" >
            <Wrapper onClick={() => setDisplay('HomeExploreTab')}>
                Walk My Dog
            </Wrapper>
            <Wrapper>
                <PopupComp btnName={<SearchIcon />} position="bottom center" >
                    <SearchPage />
                </PopupComp>
            </Wrapper>
            <Wrapper className="navButtons">
                <PopupComp btnName={<QuestionAnswerOutlinedIcon />} position="bottom center" >
                    <MessagesPopup />
                </PopupComp>
                <PopupComp btnName={<NotificationsIcon />} position="bottom center" >
                    <NotificationPopup />
                </PopupComp>
                <PopupComp btnName={<AccountCircleIcon />} position="bottom center" >
                    <UserProfilePop />
                </PopupComp>
            </Wrapper>
        </Wrapper>
    )
}

export default Nav
