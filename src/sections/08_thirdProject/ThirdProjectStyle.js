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
`
const ImageDescriptionWrapper = styled.div `
    width: 55%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    // background-color: red;
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
    // margin-top: 200px;
    font-size: 2.3rem;
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
    `
    
    const LinkContainer = styled(LinkContainerStyled) `
    height: 100px;
    `
    const LinkTextContainer = styled(LinkTextContainerStyled) `
    // background-color: red;
    height: 75px;
    // display: flex;
    // flex-direction: column;
    // justify-content: space-between;
`

const LinkTextView = styled(LinkTextViewStyled) `
    color: white;
`

const LinkTextAddress = styled(LinkTextAddressStyled) `

`

const IconImage = styled(LinkIconStyled) `
    height: 100%;
`


const TechnologyImageContainer = styled.div `
    height: 22%;
`



export { Wrapper, ImageDescriptionWrapper, ImageContainer, Image, Description, LinksWrapper, LinkContainer, LinkTextContainer, LinkTextView, LinkTextAddress, IconImage, TechnologyImageContainer }