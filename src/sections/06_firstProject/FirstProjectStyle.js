import styled from "styled-components"
import { WrapperStyled, RegularTextStyled, LinkContainerStyled, LinkTextContainerStyled, LinkTextViewStyled, LinkTextAddressStyled, LinkIconStyled } from "../../components/ui/StyledComponents"
import { colors } from "../../components/ui/Colors"

const {light} = colors

const Wrapper = styled(WrapperStyled) `
    justify-content: space-between;
    background-color: ${light};
    padding: 50px 0;
    height: 900px;

`
const ImageDescriptionWrapper = styled.div `
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
`

const ImageContainer = styled.div `
    position: relative;
    width: 55%;
`

const ImageText = styled.p `
    position: absolute;
    top: 40%;
    left: 10%;
    width: 300px;
    color: white;
    font-size: 4rem;
    font-style: italic;

`

const Image = styled.img `
    width: 100%;
    border-radius: 20px;
    object-fit: contain;
`

const Description = styled(RegularTextStyled) `
    width: 35%;
    text-align: right;
    font-size: 2.3rem;
`

const LinksWrapper = styled.div `
    height: 100px;
    width: 100%;
    padding: 0 50px;
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 1250px) {
        height: 200px;
        flex-direction: column;
    }
`
    
const LinkContainer = styled(LinkContainerStyled) `

`
const LinkTextContainer = styled(LinkTextContainerStyled) `

`

const LinkTextView = styled(LinkTextViewStyled) `

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
    // background-color: red;
    display: flex;
    align-items: center;
    @media screen and (max-width: 1250px) {
        width: 30%;
    }
`

const TechnologyImage = styled.img `
    width: 100%;
`


export { Wrapper, ImageDescriptionWrapper, ImageContainer, ImageText, Image, Description, LinksWrapper, LinkContainer, LinkTextContainer, LinkTextView, LinkTextAddress, IconImage, TechnologyImageContainer, TechnologyImage }