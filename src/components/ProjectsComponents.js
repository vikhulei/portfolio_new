import styled from "styled-components"
import {WrapperStyled, RegularTextStyled} from "./GeneralComponents"

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

const ImageDescriptionWrapperProjects = styled.div `
    width: 55%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width: 1100px) {
        width: 100%;
        flex-direction: column;
        justify-content: left;
        margin-bottom: 50px;
    }
`

const ImageContainerProjects = styled.div `
    position: relative;
    width: 100%;
    @media screen and (max-width: 1100px) {
        margin: 0 0 30px 0;
    }
`

const ImageProjects = styled.img `
    width: 100%;
    height: 100%;
    border-radius: 20px;
`

const DescriptionProjects = styled(RegularTextStyled) `
    width: 50vw;
    max-width: 700px;
    text-align: center;
    font-size: min(4.5vw, 2.3rem);
    @media screen and (max-width: 1100px) {
        margin: 0;
        width: 90%;
    }
`

const LinksWrapperProjects = styled.div `
    height: 100%;
    width: 35%;
    padding: 100px 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: left;
    @media screen and (max-width: 1100px) {
        height: 50%;
        max-height: 300px;
        width: 100%;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        padding: 20px;
        border-radius: 0 0 20px 20px;
    }
`
    
const LinkContainerProjects = styled.div `
    display: flex;
    align-items: center;
    height: 100px;
    @media screen and (max-width: 1100px) {
        width: 100%;
        margin-left: 25%;
    }    
    @media screen and (max-width: 600px) {
        margin-left: 15%;
    }    
`

const LinkTextContainerProjects = styled.div `
    margin-left: 10px;
    height: 50px;
    display: flex;
    flex-direction: column;
    height: 75px;
    @media screen and (max-width: 1100px) {
        height: auto;
    }
`

const LinkTextViewProjects = styled.p `
    font-size: min(4vw, 1.3rem);
    font-weight: bold;
    word-wrap: break-word;
    color: white;
    @media screen and (max-width: 1100px) {
        color: black;
    }

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

const IconProjects = styled.img `
    height: 100%;
    @media screen and (max-width: 1100px) {
        height: auto;
        width: 70px;
    }
`


const TechnologyImageContainer = styled.div `
    height: 22%;
    align-self: center;
    @media screen and (max-width: 1100px) {
        max-height: 100px;
        height: 10vh;
    }
`

const TechnologyImage = styled.img `
    height: 100%
`

export {WrappedStyledProjects,
    ImageDescriptionWrapperProjects,
    ImageContainerProjects,
    ImageProjects,
    DescriptionProjects,
    LinksWrapperProjects,
    LinkContainerProjects,
    LinkTextContainerProjects,
    LinkTextViewProjects,
    LinkTextAddressStyled,
    IconProjects,
    TechnologyImageContainer,
    TechnologyImage }