import { useState, useEffect, useRef } from "react"
import {
  Wrapper,
  Heading,
  ValuesWrapper,
  ValueContainer,
  ValueNameContainer,
  ValueNumber,
  ValueName,
  ValueText,
  ValuesImageContainer,
  ValuesImage
} from "./ValuesStyle"
import values from "../../assets/values.png"
import { showingPointFunction } from "../../util/showingPointFunction"


const Values = () => {

  const [showAnimation, setShowAnimation] = useState(false)
  
  const handRef = useRef(null)

  const {showingPoint, elementTop} = showingPointFunction

  const animateHand = () => {
    const handPosition = elementTop(handRef.current)
    if(handPosition < showingPoint()) {
      setShowAnimation(true)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", animateHand)
    return () => window.removeEventListener("scroll", animateHand)
  }, [])

  return (
    <Wrapper>
      <Heading>My values</Heading>
      <ValuesWrapper>
        <ValueContainer>
        <ValueNameContainer>
          <ValueNumber>1</ValueNumber>
          <ValueName>Communication</ValueName>
        </ValueNameContainer>
        <ValueText>
        The ability to collaborate with one another  is especially important in case of remote or hybrid work.
        </ValueText>
        </ValueContainer>
        <ValueContainer>
        <ValueNameContainer>
          <ValueNumber>2</ValueNumber>
          <ValueName>Reliablity</ValueName>
        </ValueNameContainer>
        <ValueText>
        Following through on commitments and deadlines is a way that people know that they can trust and depend on me.
        </ValueText>
        </ValueContainer>
        <ValueContainer>
        <ValueNameContainer>
          <ValueNumber>3</ValueNumber>
          <ValueName>
            Growth
          </ValueName>
        </ValueNameContainer>
        <ValueText>
        Never-ending process of gaining new skills and experience... an absolute truth for coding!
        </ValueText>
        </ValueContainer>
      </ValuesWrapper>
      <ValuesImageContainer
      ref={handRef}
      showAnimation={showAnimation}
      >
        <ValuesImage src={values} alt="values image" />
      </ValuesImageContainer>
    </Wrapper>
  )
}

export default Values