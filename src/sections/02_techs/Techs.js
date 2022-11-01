import { useState, useEffect, useRef } from "react"
import {
  Wrapper,
  ImagesWrapper,
  LeftImage,
  TopImage,
  BottomImage,
  Image,
  IconsWrapper,
  IconContainer,
  Icon
} from "./TechsStyle"
import notebook from "../../assets/notebook.jpg"
import code from "../../assets/code.jpg"
import react from "../../assets/react.jpg"
import axios from "../../assets/icons/axios.png"
import figma from "../../assets/icons/figma.png"
import git from "../../assets/icons/git.png"
import html from "../../assets/icons/html.png"
import redux from "../../assets/icons/redux.png"
import styled from "../../assets/icons/styled.png"
import { showingPointFunction } from "../../util/showingPointFunction"

const Techs = () => {

  const [showAnimation, setShowAnimation] = useState(false)

  const iconsRef = useRef(null)
  
  const {showingPoint, elementTop} = showingPointFunction
  
  const animateIcons = () => {
    const iconsPos = elementTop(iconsRef.current)
    if (iconsPos < showingPoint()) {
      setShowAnimation(true)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", animateIcons)
    return () => window.removeEventListener("scroll", animateIcons)
  }, [])

  return (
    <Wrapper>
      <ImagesWrapper>
        <LeftImage>
          <Image
            src={notebook}
            alt="notebook" />
        </LeftImage>
        <TopImage>
          <Image
            src={code}
            alt="code" />
        </TopImage>
        <BottomImage>
          <Image
            src={react}
            alt="react" />
        </BottomImage>
      </ImagesWrapper>
      <IconsWrapper
        showIcons={showAnimation}
        ref={iconsRef}
        >
        <IconContainer
        >
          <Icon
          src={html}
          style={{"rotate": "-10deg"}}
          />
        </IconContainer>
        <IconContainer>
          <Icon
          src={axios}
          style={{"rotate": "25deg"}}
          />
        </IconContainer>
        <IconContainer>
          <Icon
          src={figma}
          style={{"rotate": "-15deg"}}
          />
        </IconContainer>
        <IconContainer>
          <Icon
          src={styled}
          />
        </IconContainer>
        <IconContainer>
          <Icon
          src={git}
          style={{"rotate": "-25deg"}}
          />
        </IconContainer>
        <IconContainer>
          <Icon
          src={redux}
          style={{"rotate": "10deg"}}
          />
        </IconContainer>
      </IconsWrapper>
    </Wrapper>
  )
}

export default Techs