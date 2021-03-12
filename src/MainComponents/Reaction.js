import React from 'react'
import Icon from '../Component/Icon'
import Card from '../Component/Card'
import love from '../Assets/love.png'
import comment from '../Assets/comment.png'
import Image from '../Component/Image'
import Text from '../Component/Text'
import Wrapper from '../Component/Wrapper'

function Reaction({likes, comments}) {
    return (
        <Card className="reactionCard" >
            <Wrapper>
                <Icon className="reaction" >
                    <Image src={love} alt="love" className="reactionImage" />
                    <Text>
                        {likes}
                    </Text>
                </Icon>
            </Wrapper>
            <Wrapper>
                <Icon className="reaction" >
                    <Image src={comment} alt="comment" className="reactionImage" />
                    <Text>
                        {comments}
                    </Text>
                </Icon>
            </Wrapper>
        </Card>
    )
}

export default Reaction
