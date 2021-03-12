import styled from "styled-components";
import hero from '../Assets/hero.jpg'


const Wrapper = styled.div`
    
    &.nav{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        /* margin: 0vh 5vw; */
        position: absolute;
        width: 100vw;
        z-index: 100;
        background: none;
    }

    &.hero{
        display: flex;
        justify-content: center;
        align-items: center;
        background: url(${hero}) no-repeat;
        background-size: cover;
        height: 60vh;
        position: relative;
    }

    &.aboutWrapper{
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 5vh 10vw;
    }

    &.aboutDetailSection{
        display: grid;
        grid-template-columns: 1fr ;
        justify-items: center;
        grid-gap: 20px;

    }

    &.feature-text{
        padding: 15px 10vw 15px 10vw;
        text-align: center;
    }

    &.testimonial-user{
        display: flex;
        align-items: center;
    }

    &.tabbutton{
        display: flex;
        justify-content: center; 
        background: green;
    }

    &.formwrapper{
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    &.usernav{
        display: flex;
        justify-content: space-between;
        padding: 10px 20px;
        background: blue;
    }

    &.navButtons{
        display: inline-flex;
    }

    &.homedisplay{
        display: grid;
        grid-template-columns: 1fr 2fr 1fr;
        
    }

    &.homeExplore{
        display: flex;
        flex-direction: column;
        justify-items: center;
        width: 100vw;
    }

    &.homepost{
        display: grid;
        grid-template-columns: 1fr ;
        grid-gap: 10px;
        justify-items: center;
    }

    &.sidebar{
        display: none;
    }
`

export default Wrapper