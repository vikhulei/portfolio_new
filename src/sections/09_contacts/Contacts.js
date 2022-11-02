import { useRef } from "react"
import {
  Wrapper,
  LargeHeadingContainer,
  LargeHeading,
  Footer,
  CopyrightNameContainer,
  CopyrightText,
  NameText,
  PortfolioContainer,
  CheckPortfolioText,
  PortfolioAddress,
  ContactsContainer,
  PhoneNumber,
  EmailAddress
} from "./ContactsStyle"
import useAnimation from "../../util/useAnimation"

const Contacts = () => {
  const touchRef = useRef(null)
  const showAnimation = useAnimation(touchRef)
  return (
    <Wrapper>
      <LargeHeadingContainer>
      <LargeHeading
        ref={touchRef}
        showAnimation={showAnimation}
      >Let’s get in touch!</LargeHeading>
      </LargeHeadingContainer>
      <Footer>
        <CopyrightNameContainer>
          <CopyrightText>© 2022</CopyrightText>
          <NameText>Viktor Hulei</NameText>
        </CopyrightNameContainer>
        <PortfolioContainer>
          <CheckPortfolioText>Check the code for this portfolio</CheckPortfolioText>
          <PortfolioAddress href="https://github.com/vikhulei/portfolio_new">https://github.com/ vikhulei/ portfolio_new</PortfolioAddress>
        </PortfolioContainer>
        <ContactsContainer>
          <PhoneNumber>+447706 204681</PhoneNumber>
          <EmailAddress href="mailto:vikhulei@gmail.com">vikhulei@gmail.com</EmailAddress>
        </ContactsContainer>
      </Footer>
    </Wrapper>
  )
}

export default Contacts