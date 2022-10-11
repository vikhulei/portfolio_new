import styled from "styled-components"
import { colors } from "../../components/ui/Colors"
import { LargeHeading } from "../../components/ui/StyledComponents"

const {background, middle_light} = colors

const Wrapper = styled.div `
    position: relative;
    margin 30px 0;
    padding: 0 40px;
    width: 100%;
    // aspect-ratio: 2/1;
    height: 800px;
    display: flex;
    flex-direction: column;
    align-items: center;
    // justify-content: space-between;
    background-color: ${background}
    `
const ImageNameWrapper = styled.div `
    width: 280px;
    margin-top: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;

`

const MyImageContainer = styled.div `

`

const MyImage = styled.img `

`

const MyName = styled.p `
    font-size: 1.3rem;
`

const LargeHeadingHome = styled(LargeHeading) `
    margin-top: 30px;
`
const MainTextHome = styled.p `
    font-size: 2.8rem;
    text-align: center;
    margin-top: 20px;
`

const ButtonEmailWrapper = styled.div `
    margin-top: 100px;
    width: 700px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const ButtonHome = styled.button `
    width: 250px;
    height: 70px;
    border: none;
    border-radius: 10px;
    background-color: ${middle_light};
    font-size: 1.5rem;
    font-weight: 100;
`

const EmailHome = styled.a `
    font-size: 1.2rem;
    color: darkblue;
`

export {Wrapper, ImageNameWrapper, MyImageContainer, MyImage, MyName, LargeHeadingHome, MainTextHome, ButtonEmailWrapper, ButtonHome, EmailHome }