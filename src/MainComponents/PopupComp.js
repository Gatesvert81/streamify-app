import React from 'react';
import Popup from 'reactjs-popup';
import Icon from '../Component/Icon';
import PopComp from '../Component/PopComp';

const PopupComp = ({children, btnName, position}) => (
  <PopComp 
    trigger={<Icon> {btnName} </Icon>} 
    position={position}
    // modal 
    nested
    >
    {children}
  </PopComp>
)

export default PopupComp