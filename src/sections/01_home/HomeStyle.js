import styled, {keyframes} from "styled-components"
import { colors } from "../../components/ui/Colors"
import { WrapperStyled, LargeHeadingStyled } from "../../components/ui/StyledComponents"

const {background, middle_light} = colors

const Appear = keyframes `
    from {
        opacity: 0;
        transform: translateY(40px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`


const Background = styled.div `
background-color: ${background};
`

const Wrapper = styled(WrapperStyled) `
    margin-top: 30px;
    animation: ${Appear} 2s;
    @media screen and (max-width: 800px) {
        margin-top: 2.5vw;
        height: 95vh;
    }
`

const ImageNameWrapper = styled.div `
    width: 85%;
    max-width: 800px;
    margin-top: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const MyImageContainer = styled.div `
    width: 40%;
    max-width: 200px;
    margin-right: 20px;
`

const MyImage = styled.img `
    width: 100%;
`

const MyName = styled.p `
    font-size: min(6vw, 3rem);
    opacity: 1;
`

const LargeHeadingHome = styled(LargeHeadingStyled) `
    margin-top: 50px;
`

const MainTextHome = styled.p `
    font-size: min(5vw, 2.8rem);
    text-align: center;
    margin-top: 7vh;
    width: 85vw;
    max-width: 1200px;
    line-height: 1.5;
`

const ButtonEmailWrapper = styled.div `
    margin-top: 150px;
    width: 75%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width: 800px) {
        position: absolute;
        flex-direction: column;
        bottom: 10vh;
        margin-top: 0;
        height: 10vh;
    }
`

const ButtonHome = styled.button `
    width: 70%;
    max-width: 300px;
    height: 6vh;
    max-height: 80px;
    border: none;
    border-radius: 20px;
    background-color: ${middle_light};
    font-size: min(4vw, 1.5rem);
    font-weight: 100;
    cursor: pointer;
    &:active {
        transform: translate(3px, 3px);
    }
    
`

const EmailHome = styled.a `
    font-size: min(4vw, 1.5rem);
    color: darkblue;
`



export {Wrapper, Background, ImageNameWrapper, MyImageContainer, MyImage, MyName, LargeHeadingHome, MainTextHome, ButtonEmailWrapper, ButtonHome, EmailHome }