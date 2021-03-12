import styled from "styled-components";


const Icon = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    border-radius: 17px;
    width: 34px;
    height: 34px;

    &.reaction{
        width: fit-content;
    }
`

export default Icon