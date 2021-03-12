import React from 'react'
import Card from '../Component/Card'
import Image from '../Component/Image'
import Text from '../Component/Text'
import Wrapper from '../Component/Wrapper'
import Reaction from './Reaction'
import UserProfileCard from './UserProfileCard'
import hero from '../Assets/hero.jpg'

function PostCard({
    displayName,
    timestamp,
    text,
    likes,
    comments,
    }) {
    return (
        <Card className="postcard" >
            <Wrapper>
                <UserProfileCard />
                {timestamp}
            </Wrapper>
            <Wrapper>
                <Text>
                    {text}
                </Text>
            </Wrapper>
            <Wrapper>
                <Image src={hero} alt="postImage" className="postImage" />
            </Wrapper>
            <Wrapper>
                <Reaction likes={likes} comments={comments} />
            </Wrapper>
        </Card>
    )
}

export default PostCard
