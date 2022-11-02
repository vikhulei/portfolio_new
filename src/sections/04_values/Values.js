import { useRef } from "react"
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
import useAnimation from "../../util/useAnimation"

const Values = () => {
  const handRef = useRef(null)
  const showAnimation = useAnimation(handRef)
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