import styled from "styled-components"
import { WrappedStyledProjects, 
    LinksWrapperProjects}
 from "../../components/ProjectsComponents"
import { colors } from "../../components/Colors"

const {background, middle} = colors

const Wrapper = styled(WrappedStyledProjects) `
    background-color: ${background};
    @media screen and (max-width: 1100px) {
        flex-direction: column-reverse;
    }
`

const LinksWrapper = styled(LinksWrapperProjects) `
    background-color: ${middle};
`



export { Wrapper, LinksWrapper }