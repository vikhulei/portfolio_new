import styled from "styled-components"
import { colors } from "../../components/ui/Colors"
import { LargeHeading } from "../../components/ui/StyledComponents"

const {background, middle} = colors

const Wrapper = styled.div `
    margin 30px 0;
    width: 100%;
    // aspect-ratio: 2/1;
    height: 800px;
    display: flex;
    flex-direction: column;
    background-color: ${background}
    `
const ImageNameWrapper = styled.div `
    display: flex;
`

const MyImageContainer = styled.div `

`

const MyImage = styled.img `

`

const MyName = styled.p `
    font-size: 1rem;
`

const LargeHeadingHome = styled(LargeHeading) `

`
const MainTextHome = styled.p `

`

const ButtonEmailWrapper = styled.div `
    display: flex;
`

const ButtonHome = styled.button `
    width: 120px;
`

const EmailHome = styled.a `

`

export {Wrapper, ImageNameWrapper, MyImageContainer, MyImage, MyName, LargeHeadingHome, MainTextHome, ButtonEmailWrapper, ButtonHome, EmailHome }