import styled from "styled-components"
import { WrapperStyled, LargeHeadingStyled } from "../../components/ui/StyledComponents"
import { colors } from "../../components/ui/Colors"

const {middle} = colors;


const Wrapper = styled(WrapperStyled) `
    height: 400px;
    justify-content: space-between;
    @media screen and (max-width: 800px) {
        height: 300px;
    }
`

const LargeHeading = styled(LargeHeadingStyled) `
    font-size: min(10vw, 8rem);
`

const Footer = styled.div `
    background-color: ${middle};
    width: 100%;
    height: 180px;
    padding: 0 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    line-height: 1.5;
    @media screen and (max-width: 800px) {
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