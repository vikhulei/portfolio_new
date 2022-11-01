import styled, {keyframes, css} from "styled-components"
import { WrapperStyled, LargeHeadingStyled } from "../../components/GeneralComponents"
import { colors } from "../../components/Colors"

const {middle} = colors;

const ScaleHeading = keyframes `
    0% {transform: scale(0.5); opacity: 0}
    100% {transform: scale(1); opacity: 1}
`

const Animation = css `
    animation: 3s ${ScaleHeading}
`

const Wrapper = styled(WrapperStyled) `
    margin: 0;
    padding: 0;
`

const LargeHeadingContainer = styled.div `
    position: relative;
    margin-bottom: 100px;
    @media (max-width: 800px) {
        margin-bottom: 50px;
    }
`

const LargeHeading = styled(LargeHeadingStyled) `
    margin: 0;
    padding: 0;
    font-size: min(10vw, 8rem);
    transition: 2s;
    visibility: ${(({showAnimation}) => showAnimation ? "visible" : "hidden")};
    ${(({showAnimation}) => showAnimation ? Animation : "")};
`

const Footer = styled.div `
    width: 100%;
    height: 180px;
    margin-bottom: 5vh;
    padding: 0 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    line-height: 1.5;
    background-color: ${middle};
    @media screen and (max-width: 1100px) {
        flex-direction: column;
        height: 250px;
        padding: 5% 80px;
    }
`

const CopyrightNameContainer = styled.div ``

const CopyrightText = styled.p ``

const NameText = styled.p ``

const PortfolioContainer = styled.div `
    font-style: italic;
    text-align: center;
`

const CheckPortfolioText = styled.p `
    font-weight: bold;
`

const PortfolioAddress = styled.a ``

const ContactsContainer = styled.div `
    text-align: right;
`

const PhoneNumber = styled.p ``

const EmailAddress = styled.a ``

export { Wrapper, LargeHeadingContainer, LargeHeading, Footer, CopyrightNameContainer, CopyrightText, NameText, PortfolioContainer, CheckPortfolioText, PortfolioAddress, ContactsContainer, PhoneNumber, EmailAddress }