import {Wrapper, Heading, ValuesWrapper, ValueContainer, ValueNameContainer, ValueNumber, ValueName, ValueText, ValuesImageContainer, ValuesImage} from "./ValuesStyle"
import values from "../../assets/values.png"


const Values = () => {
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
          communication Text
        </ValueText>
        </ValueContainer>
        <ValueContainer>
        <ValueNameContainer>
          <ValueNumber>2</ValueNumber>
          <ValueName>Dependability</ValueName>
        </ValueNameContainer>
        <ValueText>
          Dependability Text
        </ValueText>
        </ValueContainer>
        <ValueContainer>
        <ValueNameContainer>
          <ValueNumber>3</ValueNumber>
          <ValueName>Growth</ValueName>
        </ValueNameContainer>
        <ValueText>
          Growth Text
        </ValueText>
        </ValueContainer>
      </ValuesWrapper>
      <ValuesImageContainer>
        <ValuesImage src={values} alt="values image" />
      </ValuesImageContainer>
    </Wrapper>
  )
}

export default Values