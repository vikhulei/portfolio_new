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
    height: 600px;
    width: 85%;
    top: 55%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: space-between;
`

const ValueContainer = styled.div `
    position: relative;
    width: 400px;
    height: 400px;
    background-color: grey;
    &:nth-child(1) {
        border-right: lightgrey solid 4px;
        margin-top: 200px;
        transform: traslateY(100px);
    }
    &:nth-child(3) {
        border-left: lightgrey solid 4px;
        margin-top: -200px;
        transform: traslateY(100px);
    }
`
const ValueNameContainer = styled.div `
`

const ValueNumber = styled.p `

`

const ValueName = styled.p `

`

const ValueText = styled(RegularTextStyled) `

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