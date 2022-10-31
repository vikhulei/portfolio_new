import styled from "styled-components"
import {WrappedStyledProjects,
    LinksWrapperProjects,
 } from "../../components/ProjectsComponents"
import { colors } from "../../components/Colors"

const {middle_light, dark} = colors

const Wrapper = styled(WrappedStyledProjects) `
    background-color: ${middle_light};
`

const LinksWrapper = styled(LinksWrapperProjects) `
    background-color: ${dark};
`

export { Wrapper, LinksWrapper }