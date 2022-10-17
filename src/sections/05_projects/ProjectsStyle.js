import styled from "styled-components"
import { WrapperStyled, LargeHeadingStyled, RegularTextStyled } from "../../components/ui/StyledComponents"

const Wrapper = styled(WrapperStyled) `
    height: 400px;
    justify-content: space-between;
`

const LargeHeading = styled(LargeHeadingStyled) `

`

const RegularText = styled(RegularTextStyled) `
    text-align: center;
    max-width: 1000px;
    font-style: italic;
    line-height: 2;
`

export {Wrapper, LargeHeading, RegularText}