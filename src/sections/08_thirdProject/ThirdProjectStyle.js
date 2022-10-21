import styled from "styled-components"
import { WrapperStyled, RegularTextStyled, LinkContainerStyled, LinkTextContainerStyled, LinkTextViewStyled, LinkTextAddressStyled, LinkIconStyled } from "../../components/ui/StyledComponents"
import { colors } from "../../components/ui/Colors"

const { light } = colors

const Wrapper = styled(WrapperStyled)`
    justify-content: space-between;
    background-color: ${light};
    padding: 50px 0;
    height: 900px;
    @media screen and (max-width: 1100px) {
        margin: 0 0 50px 0;
        padding: 0 0 50px 0;
        height: fit-content;
        border-radius: 20px;
        justify-content: left;
    }
`

const ImageDescriptionWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
    @media screen and (max-width: 1100px) {
        justify-content: left;
        padding: 0;
        flex-direction: column;
        margin-bottom: 50px;
    }
`

const ImageContainer = styled.div`
    position: relative;
    width: 55%;
    @media screen and (max-width: 1100px) {
        width: 100%;
        margin-bottom: 50px;
    }
`
    
const ImageText = styled.p`
    position: absolute;
    top: 40%;
    left: 10%;
    width: 300px;
    color: white;
    font-size: min(10vw, 4rem);
    font-style: italic;
`
    
const Image = styled.img`
    width: 100%;
    border-radius: 20px;
    object-fit: contain;
`
    
const Description = styled(RegularTextStyled)`
    width: 35%;
    text-align: right;
    font-size: min(5.5vw, 2.3rem);
    @media screen and (max-width: 1100px) {
        width: 90%;
        text-align: center;
    }  
`

const LinksWrapper = styled.div`
    height: 100px;
    width: 100%;
    padding: 0 50px;
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 1100px) {
        height: 45vw;
        max-height: 300px;
        width: fit-content;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        padding: 0;
    }
`

const LinkContainer = styled(LinkContainerStyled)`
    @media screen and (max-width: 1100px) {
        width: 100%;
    }
`
const LinkTextContainer = styled(LinkTextContainerStyled)`
    height: auto;
`

const LinkTextView = styled(LinkTextViewStyled)``
    
const LinkTextAddress = styled(LinkTextAddressStyled)``

const IconImage = styled(LinkIconStyled)`
    height: 100%;
    @media screen and (max-width: 1100px) {
        height: auto;
        width: 60px;
    }
`

const TechnologyImageContainer = styled.div`
    display: flex;
    align-items: center;
    @media screen and (max-width: 1100px) {
        width: 170px;
    }
    @media screen and (max-width: 800px) {
        align-self: center;
    }
`

const TechnologyImage = styled.img`
    width: 100%;
`


export { Wrapper, ImageDescriptionWrapper, ImageContainer, ImageText, Image, Description, LinksWrapper, LinkContainer, LinkTextContainer, LinkTextView, LinkTextAddress, IconImage, TechnologyImageContainer, TechnologyImage }