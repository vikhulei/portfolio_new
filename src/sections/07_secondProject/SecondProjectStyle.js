import styled from "styled-components"
import { WrapperStyled, RegularTextStyled, LinkContainerStyled, LinkTextContainerStyled, LinkTextViewStyled, LinkTextAddressStyled, LinkIconStyled } from "../../components/ui/StyledComponents"
import { colors } from "../../components/ui/Colors"

const {background, middle} = colors

const Wrapper = styled(WrapperStyled) `
    justify-content: space-between;
    flex-direction: row;
    // padding-bottom: 50px;
    background-color: ${background};
    border-radius: 20px;
    @media screen and (max-width: 1100px) {
        flex-direction: column-reverse;
        padding: 0;
        justify-content: left;
        height: fit-content;
        margin-bottom: 50px;
    }
`
const ImageDescriptionWrapper = styled.div `
    width: 55%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media screen and (max-width: 1100px) {
        width: 100%;
        flex-direction: column-reverse;
        justify-content: left;
    }
`

const ImageContainer = styled.div `
    position: relative;
    width: 100%;
    height: 50%;
`

const Image = styled.img `
    width: 100%;
    height: 110%;
    border-radius: 20px;
    object-fit: cover;
`

const Description = styled(RegularTextStyled) `
    max-width: 700px;
    text-align: center;
    margin-top: 200px;
    font-size: min(5vw, 2.3rem);
    @media screen and (max-width: 1100px) {
        margin: 0 0 20px 0;
        width: 90%;
    }
`

const LinksWrapper = styled.div `
    height: 100%;
    width: 35%;
    padding: 100px 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: ${middle};
    @media screen and (max-width: 1100px) {
        justify-content: left;
        height: 45%;
        max-height: 300px;
        width: 100%;
        padding: 0 10% 5%;
        margin-top: 20px;
        border-radius: 20px;
    }
    `
    
    const LinkContainer = styled(LinkContainerStyled) `
    height: 100px;
    `
    const LinkTextContainer = styled(LinkTextContainerStyled) `
    height: 75px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media screen and (max-width: 1100px) {
        height: auto;
    }
`

const LinkTextView = styled(LinkTextViewStyled) `

`

const LinkTextAddress = styled(LinkTextAddressStyled) `

`

const IconImage = styled(LinkIconStyled) `
    height: 100%;
    @media screen and (max-width: 1100px) {
        height: auto;
        width: 70px;
    }
`


const TechnologyImageContainer = styled.div `
    height: 15%;
    @media screen and (max-width: 1100px) {
        max-height: 50px;
        height: 10vh;
    }
`

const TechnologyImage = styled.img `
    height: 100%
    // width: 100%;
`



export { Wrapper, ImageDescriptionWrapper, ImageContainer, Image, Description, LinksWrapper, LinkContainer, LinkTextContainer, LinkTextView, LinkTextAddress, IconImage, TechnologyImageContainer, TechnologyImage }