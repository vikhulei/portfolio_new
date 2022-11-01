import styled from "styled-components"
import {WrappedStyledProjects,
    ImageDescriptionWrapperProjects,
    DescriptionProjects,
    LinksWrapperProjects,
    TechnologyImageContainerProjects } from "../../components/ProjectsComponents"
import { colors } from "../../components/Colors"

const { light } = colors

const Wrapper = styled(WrappedStyledProjects)`
    flex-direction: column;
    background-color: ${light};
    height: 900px;
    @media screen and (max-width: 1100px) {
        height: fit-content;
    }
`

const ImageDescriptionWrapper = styled(ImageDescriptionWrapperProjects) `
    width: 100%;
    height: fit-content;
    flex-direction: row;
    gap: 50px;
    @media screen and (max-width: 1100px) {
        flex-direction: column;
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
    
const Description = styled(DescriptionProjects)`
    text-align: right;
    @media screen and (max-width: 1100px) {
        text-align: center;
    }  
`

const LinksWrapper = styled(LinksWrapperProjects)`
    height: 100px;
    width: 100%;
    padding: 0 50px;
    flex-direction: row;
    @media screen and (max-width: 1100px) {
        height: 45vh;
        flex-direction: column;
        padding: 20px;
        background-color: transparent;
    }
`

const TechnologyImageContainer = styled(TechnologyImageContainerProjects)`
    height: auto;
`

export { Wrapper, ImageDescriptionWrapper, ImageText, Description, LinksWrapper, TechnologyImageContainer }