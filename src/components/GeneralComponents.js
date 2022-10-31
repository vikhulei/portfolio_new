import styled from "styled-components"

const WrapperStyled = styled.div `
    position: relative;
    margin 100px 0;
    padding: 80px;
    width: 100%;
    height: 1000px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media screen and (max-width: 800px) {
        padding: 30px;
        margin: 0;
    }
`

const WrappedStyledProjects = styled(WrapperStyled) `
    padding: 30px;
    flex-direction: row;
    justify-content: space-between;
    align-items: start;
    @media screen and (max-width: 1100px) {
        flex-direction: column;
        padding: 0;
        justify-content: left;
        height: fit-content;
        margin-bottom: 50px;
        border-radius: 20px;
    }
`

const LargeHeadingStyled = styled.h1 `
    font-size: min(12vw, 10rem);
    @media screen and (max-width: 1250px) {
        font-size: 6rem;
    }
    @media screen and (max-width: 800px) {
        font-size: 8vw;
    }
    
`

const RegularTextStyled = styled.p `
    font-size: 2.3rem
`

const LinkContainerStyled = styled.div `
    // width: fit-content;
    display: flex;
    align-items: center;
`
const LinkTextContainerStyled = styled.div `
    margin-left: 10px;
    height: 50px;
    display: flex;
    flex-direction: column;
    // justify-content: space-between;
`

const LinkTextViewStyled = styled.p `
    font-size: min(4vw, 1.3rem);
    font-weight: bold;
    word-wrap: break-word;
`

const LinkTextAddressStyled = styled.a `
    font-size: min(3.5vw, 1.1rem);
    word-wrap: brake-word;
    margin-top: 10px;
    color: darkblue;
    &:visited {
        color: darkblue;
    }

`

const LinkIconStyled = styled.img `
    // height: 100%;
    // width: 100%;
`

export {WrapperStyled, WrappedStyledProjects, LargeHeadingStyled, RegularTextStyled, 
    LinkContainerStyled, LinkTextContainerStyled, LinkTextViewStyled, LinkTextAddressStyled, LinkIconStyled 
}