import styled, { keyframes } from "styled-components"
import { colors } from "../../components/ui/Colors"

const { background, middle_light } = colors

const Wrapper = styled.div`
    position: relative;
    margin 30px 0;
    // padding: 0 40px;
    width: 100%;
    height: 800px;
    display: flex;
    flex-direction: column;
    align-items: center;
    // background-color: ${background}
`

const ImagesWrapper = styled.div`
    width: 100%;
    height: 600px;
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
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 3;
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
    display: flex;
    justify-content: space-between;
`

const IconContainer = styled.div `
    width: 80px;
    height: 160px;
    overflow: hidden;
`

export { Wrapper, ImagesWrapper, LeftImage, TopImage, BottomImage, Image, IconsWrapper }



// const AllImageWrapper = styled.div `
//     display: flex;
//     justify-content: space-between;
// `

// const LeftImageWrapper = styled.div `

// `

// const RightImageWrapper = styled.div `
//     display: flex;
//     flex-direction: column;
//     justify-content: space-between;
// `