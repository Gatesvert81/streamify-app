import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import Tab from '../../Component/Tab';
import Wrapper from '../../Component/Wrapper'
import ExplorePost from './ExplorePost';
import HomePost from './HomePost';
import PostPopup from './PostPopup';


const types = ['Home', 'Explore'];
function HomeExploreTab() {
    const [active, setActive] = useState(types[0])
    let history = useHistory();
    
    function handleClick() {
        history.push("/");
      }
      

    return (
        <Wrapper className="homeExplore" >
            <Wrapper className="tabbutton">
                {types.map((type, index) => (
                    <Wrapper key={index} >
                    <Tab
                    key={type}
                    active={active === type}
                    onClick={() => setActive(type)}>
                        {type}
                    </Tab>
                    </Wrapper>
                ))}
            </Wrapper>
            {active === 'Home' ?
                <HomePost /> :  <ExplorePost /> }
           
            <PostPopup />
        </Wrapper>
    )
}

export default HomeExploreTab
