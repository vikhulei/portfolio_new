import styled from "styled-components"
import { WrapperStyled, RegularTextStyled } from "../../components/ui/StyledComponents"
import { colors } from "../../components/ui/Colors"

const {middle, middle_light} = colors

const Wrapper = styled(WrapperStyled) `
    margin: 0;
    padding: 0;
    align-items: start;
    background-color: ${middle_light}
`

const Heading = styled.h1 `
    font-size: 3.5rem;
    margin: 50px 0 0 50px;
`

const ValuesWrapper = styled.div `
    position: absolute;
    height: 500px;
    width: 85%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 1250px) {
        top: 10%;
        left: 10%;
        transform: none;
        flex-direction: column;
    }
`

const ValueContainer = styled.div `
    position: relative;
    width: 100%;
    height: 400px;
    padding: 0 90px 0 30px;
    &:nth-child(1) {
        margin-top: 120px;
    }
    &:nth-child(2) {
        border-left: ${middle} solid 4px;
    }
    &:nth-child(3) {
        border-left: ${middle} solid 4px;
        margin-top: -120px;
    }

`
const ValueNameContainer = styled.div `
    display: flex;
    align-items: center;
`

const ValueNumber = styled.p `
    width: 50px;
    height: 50px;
    background-color: ${middle};
    text-align: center;
    line-height: 1.8;
    border-radius: 50%;
    font-weight: 900;
    font-size: 1.7rem;
    @media screen and (max-width: 1250px) {
        font-size: 1.4rem;
    }
    `
    
const ValueName = styled.p `
    margin-left: 20px;
    font-size: 2.2rem;
    font-weight: 900;
`

const ValueText = styled.p `
    margin-top: 30px;
    font-size: 2rem;
    font-style: italic;
    line-height: 1.8;
`

const ValuesImageContainer = styled.div `
    position: absolute;
    max-width: 700px;
    width: 30%;
    right: 60px;
    bottom: 50px;
`

const ValuesImage = styled.img `
    width: 100%;
`

export {Wrapper, Heading, ValuesWrapper, ValueContainer, ValueNameContainer, ValueNumber, ValueName, ValueText, ValuesImageContainer, ValuesImage}