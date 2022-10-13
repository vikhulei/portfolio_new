import styled from "styled-components"
import { WrapperStyled, RegularTextStyled } from "../../components/ui/StyledComponents"
import {colors} from "../../components/ui/Colors"

const {dark, light} = colors

const Wrapper = styled(WrapperStyled) `
    padding: 80px 80px;
    justify-content: space-between;
    align-items: start;
    background-color: ${dark};
`

const Heading = styled.h1 `
    text-align: left;
    width: 800px;
    font-size: 4rem;
`

const RegularText = styled(RegularTextStyled) `
    margin-left: 100px;
    width: 70%;
    line-height: 1.7;
    z-index: 99;
`

const EquimpentImageContainer = styled.div `
    // margin-left: 100px;
`

const EquimpentImage = styled.img `

`
const MyImageContainer = styled.div `
    position: absolute;
    right: 50px;
    bottom: 50px;
    width: 30%;
    height: 800px;
    display: flex;
    justify-content: center;
    align-items: end;
    background-color: ${light}
`

const MyImage = styled.img `
    width: 100%;
    object-fit: contain;
`

export {Wrapper, Heading, RegularText,EquimpentImageContainer, EquimpentImage, MyImageContainer, MyImage }