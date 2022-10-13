import styled from "styled-components"

const WrapperStyled = styled.div `
    position: relative;
    margin 100px 0;
    padding: 0 40px;
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

export {WrapperStyled, LargeHeadingStyled, RegularTextStyled}