import styled from "styled-components"
import { WrapperStyled } from "../../components/ui/StyledComponents"


const Wrapper = styled(WrapperStyled) `
    padding: 0;
    height: 990px;
    justify-content: space-between;
`

const ImagesWrapper = styled.div`
    width: 100%;
    height: 900px;
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    grid-template-rows: 1fr 1fr;
    column-gap: 50px;
    row-gap: 50px;
    margin-bottom: 50px;
    @media screen and (max-width: 1250px) {
        grid-template-columns: 0fr 2fr;
        column-gap: 0px;
        row-gap: 0px;
    }
    @media screen and (max-width: 800px) {
        margin-bottom: 5px;
    }
`

const ImageContainer = styled.div`
    height: 100%;
    width: 100%;
    overflow: hidden;
`

const LeftImage = styled(ImageContainer)`
    position: relative;
    grid-column: 1 / 2;
    grid-row: 1 / 3;
    @media screen and (max-width: 1250px) {
        display: none;
    }
`
    
const TopImage = styled(ImageContainer)`
    grid-column: 2 / 3;
    grid-row: 1 / 2;
`
    
const BottomImage = styled(ImageContainer)`
    grid-column: 2 / 3;
    grid-row: 2 / 3;
`

const Image = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
`

const IconsWrapper = styled.div `
    width: 100%;
    display: flex;
    justify-content: space-around;
    transition: 0.5s;
    opacity: ${(({showIcons}) => showIcons ? 1 : 0)};
    transform: translateY(${(({showIcons}) => showIcons ? "0px" : "50px")});
`
    
const IconContainer = styled.div `
    width: 120px;
    height: 90px;
    overflow: hidden;
`

const Icon = styled(Image)`
    object-fit: contain;
`


export { Wrapper, ImagesWrapper, LeftImage, TopImage, BottomImage, Image, IconsWrapper, IconContainer, Icon }

