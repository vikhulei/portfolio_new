import { Wrapper, ImagesWrapper, LeftImage, TopImage, BottomImage, Image } from "./TechsStyle"
import notebook from "../../assets/notebook.jpg"
import code from "../../assets/code.jpg"
import react from "../../assets/react.jpg"

const Techs = () => {
  return (
    <Wrapper>
      <ImagesWrapper>
        <LeftImage>
          <Image src={notebook} alt="notebook" />
        </LeftImage>
        <TopImage>
          <Image src={code} alt="code" />
        </TopImage>
        <BottomImage>
          <Image src={react} alt="react" />
        </BottomImage>
      </ImagesWrapper>

    </Wrapper>
  )
}

export default Techs