import styled from "styled-components"
import { colors } from "../../components/ui/Colors"

const { background, middle_light } = colors


const Wrapper = styled.div`
    position: relative;
    margin 100px 0;
    // padding: 0 40px;
    width: 100%;
    height: 1200px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    // background-color: ${background}
`

const ImagesWrapper = styled.div`
    width: 100%;
    height: 9-00px;
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    grid-template-rows: 1fr 1fr;
    column-gap: 50px;
    row-gap: 50px;
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
    transition: 1s;
    opacity: ${(({showNotebook}) => showNotebook ? 1 : 0)};
    transform: translateY(${(({showNotebook}) => showNotebook ? "0px" : "100px")});

    `
    
const TopImage = styled(ImageContainer)`
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 2;
    transition: 2s;
    opacity: ${(({showCode}) => showCode ? 1 : 0)};
    transform: translateY(${(({showCode}) => showCode ? "0px" : "100px")});
    `
    
    const BottomImage = styled(ImageContainer)`
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 3;
    transition: 1s;
    opacity: ${(({showReact}) => showReact ? 1 : 0)};
    transform: translateY(${(({showReact}) => showReact ? "0px" : "100px")});
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
    transition: 3s;
    opacity: ${(({showIcons}) => showIcons ? 1 : 0)};
    `
    
    const IconContainer = styled.div `
    width: 120px;
    height: 160px;
    overflow: hidden;
    `
    const Icon = styled(Image)`
    object-fit: contain;
    `


export { Wrapper, ImagesWrapper, LeftImage, TopImage, BottomImage, Image, IconsWrapper, IconContainer, Icon }

