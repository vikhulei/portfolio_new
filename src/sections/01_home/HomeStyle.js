import styled, {keyframes} from "styled-components"
import { colors } from "../../components/ui/Colors"
import { LargeHeading } from "../../components/ui/StyledComponents"

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
    position: relative;
    margin 30px 0;
    padding: 0 40px;
    width: 100%;
    height: 1000px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${background}
    `

const ImageNameWrapper = styled.div `
    width: 280px;
    margin-top: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    animation: ${Appear} 2s;
`

const MyImageContainer = styled.div ``

const MyImage = styled.img ``

const MyName = styled.p `
    font-size: 1.3rem;
    opacity: 1;
    `

const LargeHeadingHome = styled(LargeHeading) `
    margin-top: 50px;
    animation: ${Appear} 2s;
    `

const MainTextHome = styled.p `
    font-size: 2.8rem;
    text-align: center;
    margin-top: 50px;
    animation: ${Appear} 2s;
`

const ButtonEmailWrapper = styled.div `
    margin-top: 150px;
    width: 700px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    animation: ${Appear} 2s;
`

const ButtonHome = styled.button `
    width: 300px;
    height: 80px;
    border: none;
    border-radius: 10px;
    background-color: ${middle_light};
    font-size: 1.5rem;
    font-weight: 100;
    &:hover {
        cursor: pointer;
    }
    &:active {
        transform: translate(3px, 3px);
    }
`

const EmailHome = styled.a `
    font-size: 1.2rem;
    color: darkblue;
`



export {Wrapper, ImageNameWrapper, MyImageContainer, MyImage, MyName, LargeHeadingHome, MainTextHome, ButtonEmailWrapper, ButtonHome, EmailHome }