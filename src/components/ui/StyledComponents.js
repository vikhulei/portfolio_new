import styled from "styled-components"

const WrapperStyled = styled.div `
    margin 100px 0;
    padding: 0 40px;
    width: 100%;
    height: 1000px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: lightgrey;
`

const LargeHeading = styled.h1 `
    font-size: 10rem;
`

const RegularText = styled.p `
    font-size: 1.5rem
`

export {WrapperStyled, LargeHeading, RegularText}