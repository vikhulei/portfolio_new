import styled from "styled-components"
import { colors } from "../../components/ui/Colors"
import { WrapperStyled } from "../../components/ui/StyledComponents"

const { background, middle_light } = colors


const Wrapper = styled(WrapperStyled) `
    padding: 0;
    height: 990px;
    justify-content: space-between;
    // border: black solid 1px;
`

const ImagesWrapper = styled.div`
    width: 100%;
    height: 900px;
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    grid-template-rows: 1fr 1fr;
    column-gap: 50px;
    row-gap: 50px;
    @media screen and (max-width: 1250px) {
        grid-template-columns: 0fr 2fr;
        column-gap: 0px;
        row-gap: 0px;
    }
`

const ImageContainer = styled.div`
    height: 100%;
    width: 100%;
    overflow: hidden;
`

const LeftImage = styled(ImageContainer)`
    position: relative;
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 3;
    @media screen and (max-width: 1250px) {
        display: none;
    }
`
    
const TopImage = styled(ImageContainer)`
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 2;
    `
    
    const BottomImage = styled(ImageContainer)`
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 3;
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
    align-items: end;
    transition: 3s;
    opacity: ${(({showIcons}) => showIcons ? 1 : 0)};

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

