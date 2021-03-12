import styled from "styled-components";


const Card = styled.div`

    &.about-about{
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
    }

    &.aboutDetail{
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
    }

    &.aboutCard{
        display: flex;
        flex-direction: column;
        /* justify-content: center; */
        text-align: center;
        border: 1px solid black;
        width: 50vw;
    }

    &.feature-card{
        display: grid;
        grid-template-columns: 1fr;
        margin-bottom: 20px;
        padding: 0vh 5vw;
        border: 1px solid black;
    }

    &.testimonial-card{
        display: flex;
        flex-direction: column;
        border: 1px solid black;
    }

    &.auth{
        display: flex;
        flex-direction: column;
    }

    &.postcard{
        width: 250px;
        border: 1px solid black;
        /* background: blue; */
    }

    &.reactionCard{
        display: flex;
        /* justify-content: space-between; */
    }
`

export default Card