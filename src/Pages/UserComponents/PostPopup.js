import React from 'react'
import PopComp from '../../Component/PopComp'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Icon from '../../Component/Icon';
import PostInput from '../../MainComponents/PostInput';

function PostPopup() {
    return (
        <PopComp
            trigger={<Icon> <AddCircleOutlineIcon />  </Icon>}
            // position={position}
            modal
            nested>
                <PostInput />  
        </PopComp>
    )
}

export default PostPopup
