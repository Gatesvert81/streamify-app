import React from 'react'
import Card from '../../Component/Card'
import UserProfileCard from '../../MainComponents/UserProfileCard'

function FollowerSideBar() {
    return (
        <Card>
            <UserProfileCard />
            <UserProfileCard />
            <UserProfileCard />
            <UserProfileCard />
            <UserProfileCard />
        </Card>
    )
}

export default FollowerSideBar
