import Popup from 'reactjs-popup';
import styled from 'styled-components';

const PopComp = styled(Popup)`
    background: black;
  // use your custom style for ".popup-overlay"
  &-overlay {
    background: none;
  }
  // use your custom style for ".popup-content"
  &-content {
    background: blueviolet ;
  }
`

export default PopComp