import styled from "styled-components"
import { WrapperStyled, LargeHeadingStyled, RegularTextStyled } from "../../components/ui/StyledComponents"

const Wrapper = styled(WrapperStyled) `
    // height: 400px;
    // justify-content: space-between;
    // @media screen and (max-width: 800px) {
        height: fit-content;
        justify-content: space-between;
        padding: 50px 0;
    
`

const LargeHeading = styled(LargeHeadingStyled) `

`

const RegularText = styled(RegularTextStyled) `
    text-align: center;
    max-width: 1000px;
    font-style: italic;
    line-height: 2;
    @media screen and (max-width: 800px) {
        font-size: 5vw;
        width: 80%;
        line-height: 1.5;
    }
`

export {Wrapper, LargeHeading, RegularText}