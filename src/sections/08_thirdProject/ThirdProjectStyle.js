import styled from "styled-components"
import { WrapperStyled, RegularTextStyled, LinkContainerStyled, LinkTextContainerStyled, LinkTextViewStyled, LinkTextAddressStyled, LinkIconStyled } from "../../components/ui/StyledComponents"
import { colors } from "../../components/ui/Colors"

const {middle_light, dark} = colors

const Wrapper = styled(WrapperStyled) `
    justify-content: space-between;
    align-items: start;
    flex-direction: row;
    padding: 30px;
    background-color: ${middle_light};
    @media screen and (max-width: 800px) {
        flex-direction: column;
        padding: 20px 0 0 0;
        justify-content: space-between;
        height: 650px;
        margin: 50px 0;
    }

`
const ImageDescriptionWrapper = styled.div `
    width: 55%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width: 800px) {
        height: 350px;
        width: 100%;
        flex-direction: column;
        justify-content: space-between;
    }
    `
    
const ImageContainer = styled.div `
    position: relative;
    width: 100%;
`

const Image = styled.img `
    width: 100%;
    height: 100%;
    border-radius: 20px;
    object-fit: contain;
`

const Description = styled(RegularTextStyled) `
    width: 700px;
    text-align: center;
    font-size: min(5.5vw, 2.3rem);
    @media screen and (max-width: 800px) {
        margin: 0px;
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
    background-color: ${dark};
    @media screen and (max-width: 800px) {
        height: 250px;
        width: 100%;
        padding: 0 10% 5%;
    }
    `
    
    const LinkContainer = styled(LinkContainerStyled) `
    height: 100px;
    `
    const LinkTextContainer = styled(LinkTextContainerStyled) `
    height: 75px;
    @media screen and (max-width: 800px) {
        height: auto;
    }
`

const LinkTextView = styled(LinkTextViewStyled) `
    color: white;
`

const LinkTextAddress = styled(LinkTextAddressStyled) `

`

const IconImage = styled(LinkIconStyled) `
    height: 100%;
    @media screen and (max-width: 1250px) {
        height: auto;
        width: 10%;
    }
`


const TechnologyImageContainer = styled.div `
    height: 22%;
    @media screen and (max-width: 800px) {
        height: 25%;
    }
`

const TechnologyImage = styled.img `
    height: 100%
`



export { Wrapper, ImageDescriptionWrapper, ImageContainer, Image, Description, LinksWrapper, LinkContainer, LinkTextContainer, LinkTextView, LinkTextAddress, IconImage, TechnologyImageContainer, TechnologyImage }