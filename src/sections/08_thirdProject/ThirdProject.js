import { Wrapper, ImageDescriptionWrapper, ImageContainer, ImageText, Image, Description, LinksWrapper, LinkContainer, LinkTextContainer, LinkTextView, LinkTextAddress, IconImage, TechnologyImageContainer, TechnologyImage } from "./ThirdProjectStyle"
import ukraine from "../../assets/ukraine.jpg"
import github from "../../assets/icons/github.png"
import githubpages from "../../assets/icons/githubpages.png"
import html from "../../assets/icons/html.png"

const FirstProject = () => {
  return (
    <Wrapper>
      <ImageDescriptionWrapper>
        <ImageContainer>
          <ImageText>
          Safety in Ukraine
          </ImageText>
          <Image src={ukraine} alt="image_safety" />
        </ImageContainer>
        <Description>
        This is one of my first sites, made with pure HTML/ CSS/JS. Created for my work at Peace Corps
        </Description>
      </ImageDescriptionWrapper>
      <LinksWrapper>
        <LinkContainer>
          <IconImage src={github} alt="github_image" />
          <LinkTextContainer>
          <LinkTextView>
            View on GitHub
          </LinkTextView>
          <LinkTextAddress href="https://github.com/vikhulei/safety">
          https://github.com/vikhulei/ safety
          </LinkTextAddress>
          </LinkTextContainer>
        </LinkContainer>
        <LinkContainer>
          <IconImage src={githubpages} alt="githubpages_image" />
          <LinkTextContainer>
          <LinkTextView>
          Run on GitHub Pages
          </LinkTextView>
          <LinkTextAddress href="https://vikhulei.github.io/safety/index.html">
          https://vikhulei.github.io/ safety/ index.html
          </LinkTextAddress>
          </LinkTextContainer>
        </LinkContainer>
        <TechnologyImageContainer>
          <TechnologyImage src={html} alt="html_image" />
        </TechnologyImageContainer>
      </LinksWrapper>
    </Wrapper>
  )
}

export default FirstProject