import {useState, useEffect, useRef} from "react"
import { Wrapper, LargeHeading, Footer, CopyrightNameContainer, CopyrightText, NameText, PortfolioContainer, CheckPortfolioText, PortfolioAddress, ContactsContainer, PhoneNumber, EmailAddress } from "./ContactsStyle"
import { showingPointFunction } from "../../util/showingPointFunction"

const Contacts = () => {

  const [showAnimation, setShowAnimation] = useState(false)

  const touchRef = useRef(null)

  const {showingPoint, elementTop} = showingPointFunction

  const animateTouch = () => {
    const touchPosition = elementTop(touchRef.current)
    if(touchPosition < showingPoint()) {
      setShowAnimation(!showAnimation)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", animateTouch)
    return () => window.removeEventListener("scroll", animateTouch)
  }, [])

  return (
    <Wrapper>
      <LargeHeading
      onClick={animateTouch}
      ref={touchRef}
      showAnimation={showAnimation}
      >Let’s get in touch!</LargeHeading>
      <Footer>
        <CopyrightNameContainer>
          <CopyrightText>© 2022</CopyrightText>
          <NameText>Viktor Hulei</NameText>
        </CopyrightNameContainer>
        <PortfolioContainer>
          <CheckPortfolioText>Check the code for this portfolio</CheckPortfolioText>
          <PortfolioAddress href="https://github.com/vikhulei/portfolio_new">https://github.com/vikhulei/portfolio_new</PortfolioAddress>
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