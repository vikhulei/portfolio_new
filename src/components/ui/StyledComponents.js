import styled from "styled-components"

const WrapperStyled = styled.div `
    position: relative;
    margin 100px 0;
    width: 100%;
    height: 1000px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const LargeHeadingStyled = styled.h1 `
    font-size: 10rem;
`

const RegularTextStyled = styled.p `
    font-size: 2.3rem
`

const LinkContainerStyled = styled.div `
    display: flex;
    align-items: center;
`
const LinkTextContainerStyled = styled.div `
    margin-left: 20px;
`

const LinkTextViewStyled = styled.p `
    font-size: 1.5rem;
    font-weight: bold;
`

const LinkTextAddressStyled = styled.a `
font-size: 1.3rem;
`

const LinkIconStyled = styled.img `
    height: 100%;
`

export {WrapperStyled, LargeHeadingStyled, RegularTextStyled, LinkContainerStyled, LinkTextContainerStyled, LinkTextViewStyled, LinkTextAddressStyled, LinkIconStyled }