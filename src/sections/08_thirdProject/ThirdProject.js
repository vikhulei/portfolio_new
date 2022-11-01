import {
  ImageContainerProjects,
  ImageProjects,
  LinkContainerProjects,
  LinkTextContainerProjects,
  LinkTextViewProjects,
  LinkTextAddressProjects,
  IconProjects,
  TechnologyImageProjects
} from "../../components/ProjectsComponents"
import {
  Wrapper,
  ImageDescriptionWrapper,
  ImageText, Description,
  LinksWrapper,
  TechnologyImageContainer
} from "./ThirdProjectStyle"
import ukraine from "../../assets/ukraine.jpg"
import github from "../../assets/icons/github.png"
import githubpages from "../../assets/icons/githubpages.png"
import html from "../../assets/icons/html.png"

const ThirdProject = () => {
  return (
    <Wrapper>
      <ImageDescriptionWrapper>
        <ImageContainerProjects>
          <ImageText>
            Safety in Ukraine
          </ImageText>
          <ImageProjects src={ukraine} alt="image_safety" />
        </ImageContainerProjects>
        <Description>
          This is one of my first sites, made with pure HTML/ CSS/JS. Created for my work at Peace Corps
        </Description>
      </ImageDescriptionWrapper>
      <LinksWrapper>
        <LinkContainerProjects>
          <IconProjects src={github} alt="github_image" />
          <LinkTextContainerProjects>
            <LinkTextViewProjects>
              View on GitHub
            </LinkTextViewProjects>
            <LinkTextAddressProjects href="https://github.com/vikhulei/safety">
              https://github.com/ vikhulei/ safety
            </LinkTextAddressProjects>
          </LinkTextContainerProjects>
        </LinkContainerProjects>
        <LinkContainerProjects>
          <IconProjects src={githubpages} alt="githubpages_image" />
          <LinkTextContainerProjects>
            <LinkTextViewProjects>
              Run on GitHub Pages
            </LinkTextViewProjects>
            <LinkTextAddressProjects href="https://vikhulei.github.io/safety/index.html">
              https://vikhulei.github.io/ safety/ index.html
            </LinkTextAddressProjects>
          </LinkTextContainerProjects>
        </LinkContainerProjects>
        <TechnologyImageContainer>
          <TechnologyImageProjects src={html} alt="html_image" />
        </TechnologyImageContainer>
      </LinksWrapper>
    </Wrapper>
  )
}

export default ThirdProject