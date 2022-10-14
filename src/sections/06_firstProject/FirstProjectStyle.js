import styled from "styled-components"
import { WrapperStyled, RegularTextStyled, LinkContainerStyled, LinkTextContainerStyled, LinkTextViewStyled, LinkTextAddressStyled, LinkIconStyled } from "../../components/ui/StyledComponents"
import { colors } from "../../components/ui/Colors"

const {light} = colors

const Wrapper = styled(WrapperStyled) `
    justify-content: space-between;
    background-color: ${light};
    padding-bottom: 50px;
`
const ImageDescriptionWrapper = styled.div `
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const ImageContainer = styled.div `
    position: relative;
    width: 60%;
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
    width: 500px;
    text-align: right;
    margin-right: 50px;
    font-size: 2.3rem;
`

const LinksWrapper = styled.div `
    height: 100px;
    width: 100%;
    padding: 0 50px;
    display: flex;
    justify-content: space-between;
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

`


const TechnologyImageContainer = styled.div `

`



export { Wrapper, ImageDescriptionWrapper, ImageContainer, ImageText, Image, Description, LinksWrapper, LinkContainer, LinkTextContainer, LinkTextView, LinkTextAddress, IconImage, TechnologyImageContainer }