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

const Wrapper = styled.div `
    background-color: ${background};
`

const AnimationWrapper = styled(WrapperStyled) `
    margin-top: 30px;
    padding: 100px 0;
    animation: ${Appear} 2s;
    @media screen and (max-width: 800px) {
        margin-top: 2.5vw;
        height: 95vh;
    }  
`

const ImageNameWrapper = styled.div `
    width: 85%;
    max-width: 800px;
    // margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const MyImageContainer = styled.div `
    width: 40%;
    max-width: 200px;
`
    
const MyImage = styled.img `
    width: 100%;
`
    
    const MyName = styled.p `
    font-size: min(6vw, 3rem);
    margin-left: 20px;
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

const ButtonHome = styled.a `
    text-decoration: none;
    color: black;
    width: 300px;
    height: 55px;
    border: none;
    border-radius: 20px;
    background-color: ${middle_light};
    font-size: min(4vw, 1.5rem);
    cursor: pointer;
    text-align: center;
    padding: 12px 0;
    &:active {
        transform: translate(3px, 3px);
        color: darkblue;
    }
    @media (max-width: 800px) {
        width: 80%;
        height: 45px;
    }
`

const EmailHome = styled.a `
    font-size: min(4vw, 1.5rem);
    color: darkblue;
`



export {Wrapper, AnimationWrapper, ImageNameWrapper, MyImageContainer, MyImage, MyName, LargeHeadingHome, MainTextHome, ButtonEmailWrapper, ButtonHome, EmailHome }