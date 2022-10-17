import { useState, useEffect, useRef } from "react"
import { Wrapper, ImagesWrapper, LeftImage, TopImage, BottomImage, Image, IconsWrapper, IconContainer, Icon } from "./TechsStyle"
import notebook from "../../assets/notebook.jpg"
import code from "../../assets/code.jpg"
import react from "../../assets/react.jpg"
import axios from "../../assets/icons/axios.png"
import figma from "../../assets/icons/figma.png"
import git from "../../assets/icons/git.png"
import html from "../../assets/icons/html.png"
import redux from "../../assets/icons/redux.png"
import styled from "../../assets/icons/styled.png"

const Techs = () => {

  const [showAnimation, setShowAnimation] = useState({
    notebook: false,
    code: false,
    react: false,
    icons: false,
  })

  const notebookRef = useRef(null)
  const codeRef = useRef(null)
  const reactRef = useRef(null)
  const iconsRef = useRef(null)

  const showingPoint = (window.innerHeight - 100)

  const getwindowHeight = () => {
    const elementTop = elementName => elementName.getBoundingClientRect().top
    const notebookPos = elementTop(notebookRef.current)
    const codePos = elementTop(codeRef.current)
    const reactPos = elementTop(reactRef.current)
    const iconsPos = elementTop(iconsRef.current)

    if (notebookPos < showingPoint) {
      setShowAnimation(prev => ({ ...prev, notebook: true }))
    }
    if (codePos < showingPoint) {
      setShowAnimation(prev => ({ ...prev, code: true }))
    }
    if (reactPos < showingPoint) {
      setShowAnimation(prev => ({ ...prev, react: true }))
    }
    if (iconsPos < showingPoint) {
      setShowAnimation(prev => ({ ...prev, icons: true }))
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", getwindowHeight)
    return () => window.removeEventListener("scroll", getwindowHeight)
  }, [])

  return (
    <Wrapper>
      <ImagesWrapper>
        <LeftImage
          showNotebook={showAnimation.notebook}
        >
          <Image
            src={notebook}
            ref={notebookRef}
            alt="notebook" />
        </LeftImage>
        <TopImage
          showCode={showAnimation.code}
        >
          <Image
            ref={codeRef}
            src={code}
            alt="code" />
        </TopImage>
        <BottomImage
          showReact={showAnimation.react}
          >
          <Image
            ref={reactRef}
            src={react}
            alt="react" />
        </BottomImage>
      </ImagesWrapper>
      <IconsWrapper
        showIcons={showAnimation.icons}
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
          // ref={iconsRef}
          style={{"rotate": "25deg"}}
          />
        </IconContainer>
        <IconContainer>
          <Icon
          src={figma}
          // ref={iconsRef}
          style={{"rotate": "-15deg"}}
          />
        </IconContainer>
        <IconContainer>
          <Icon
          src={styled}
          // ref={iconsRef}
          />
        </IconContainer>
        <IconContainer>
          <Icon
          src={git}
          // ref={iconsRef}
          style={{"rotate": "-25deg"}}
          />
        </IconContainer>
        <IconContainer>
          <Icon
          src={redux}
          // ref={iconsRef}
          style={{"rotate": "10deg"}}
          />
        </IconContainer>
      </IconsWrapper>
    </Wrapper>
  )
}

export default Techs