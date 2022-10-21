import styled, { css, keyframes } from "styled-components"
import { WrapperStyled, RegularTextStyled } from "../../components/ui/StyledComponents"
import {colors} from "../../components/ui/Colors"

const {dark, light} = colors

const EquipmentTransition = keyframes `
    0% {transform: translateX(-50vw)}
    70% {transform: translateX(3vw)}
    100% {transform: translateX(0vw)}
`

const Animation = css `
    animation: 2s ${EquipmentTransition}
`

const Wrapper = styled(WrapperStyled) `
    padding: 80px 80px 50px;
    justify-content: space-between;
    align-items: start;
    background-color: ${dark};
    @media screen and (max-width: 800px) {
        padding: 10px;
        align-items: stretch;
        height: auto;
    }
`

const Heading = styled.h1 `
    text-align: left;
    width: 70%;
    max-width: 800px;
    font-size: min(10vw, 4rem);
    @media screen and (max-width: 800px) {
        margin: 10% 5%;
    }
`

const RegularText = styled(RegularTextStyled) `
    font-size: min(6vw, 2.3rem);
    margin-left: 10%;
    width: 70%;
    line-height: 1.7;
    z-index: 99;
    @media screen and (max-width: 800px) {
        margin: 0;
        padding: 5%;
        width: 100%;
        text-align: justify;
    }
`

const EquimpentImageContainer = styled.div `
    width: 25vw;
    margin-top: 30px;
    transition: 1s;
    ${(({showAnimation}) => showAnimation ? Animation : "")};
    visibility: ${(({showAnimation}) => showAnimation ? "visible" : "hidden")} ;
    @media screen and (max-width: 1000px) {
        visibility: hidden;
    }
`
    
    const EquimpentImage = styled.img `
    width: 100%;
`
const MyImageContainer = styled.div `
    position: absolute;
    right: 50px;
    bottom: 50px;
    width: 30%;
    height: 800px;
    display: flex;
    justify-content: center;
    align-items: end;
    background-color: ${light};
    @media screen and (max-width: 800px) {
        position: static;
        width: 100%;
        height: 100vw;
    }
`

const MyImage = styled.img `
    width: 100%;
    object-fit: contain;
`

export {Wrapper, Heading, RegularText,EquimpentImageContainer, EquimpentImage, MyImageContainer, MyImage }