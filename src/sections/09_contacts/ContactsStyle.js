import styled, {keyframes, css} from "styled-components"
import { WrapperStyled, LargeHeadingStyled } from "../../components/ui/StyledComponents"
import { colors } from "../../components/ui/Colors"

const {middle} = colors;

const ScaleHeading = keyframes `
    0% {transform: scale(1); opacity: 0}
    50% {transform: scale(1.2); opacity: 1}
    100% {transform: scale(1); opacity: 1}
`

const Animation = css `
    animation: 2s ${ScaleHeading}
`

const Wrapper = styled(WrapperStyled) `
    height: 400px;
    justify-content: space-between;
    @media screen and (max-width: 1100px) {
        height: fit-content;
    }
`

const LargeHeading = styled(LargeHeadingStyled) `
    font-size: min(10vw, 8rem);
    transition: 3s;
    visibility: ${(({showAnimation}) => showAnimation ? "visible" : "hidden")};
    ${(({showAnimation}) => showAnimation ? Animation : "")};
    @media screen and (max-width: 1100px) {
        margin-bottom: 50px;
    }
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
        height: 220px;
        padding: 5% 80px;
    }
`

const CopyrightNameContainer = styled.div `
`

const CopyrightText = styled.p `
`
const NameText = styled.p `

`


const PortfolioContainer = styled.div `
    font-style: italic;
    text-align: center;
`

const CheckPortfolioText = styled.p `
    font-weight: bold;
`

const PortfolioAddress = styled.a `

`

const ContactsContainer = styled.div `
    text-align: right;
`

const PhoneNumber = styled.p `

`

const EmailAddress = styled.a `

`


export { Wrapper, LargeHeading, Footer, CopyrightNameContainer, CopyrightText, NameText, PortfolioContainer, CheckPortfolioText, PortfolioAddress, ContactsContainer, PhoneNumber, EmailAddress }