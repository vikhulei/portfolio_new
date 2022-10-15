import { Wrapper, ImageDescriptionWrapper, ImageContainer, Image, Description, LinksWrapper, LinkContainer, LinkTextContainer, LinkTextView, LinkTextAddress, IconImage, TechnologyImageContainer } from "./ThirdProjectStyle"
import contactStore from "../../assets/contactStore.jpg"
import github from "../../assets/icons/github.png"
import surge from "../../assets/icons/surge.png"
import redux2 from "../../assets/icons/redux2.png"

const ThirdProject = () => {
  return (
    <Wrapper>
      <ImageDescriptionWrapper>
        <ImageContainer>
          <Image src={contactStore} alt="image_safety" />
        </ImageContainer>
        <Description>
          This small website was created for an existing church in Kyiv. It has a landing page, a brief history, a schedule of services and a <em> Message-Us </em> page.
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
          <IconImage src={surge} alt="githubpages_image" />
          <LinkTextContainer>
            <LinkTextView>
              Run on Surge platform
            </LinkTextView>
            <LinkTextAddress href="https://vikhulei.github.io/safety/index.html">
              https://vikhulei.github.io/safety/ index.html
            </LinkTextAddress>
          </LinkTextContainer>
        </LinkContainer>
        <TechnologyImageContainer>
          <IconImage src={redux2} alt="html_image" />
        </TechnologyImageContainer>
      </LinksWrapper>
    </Wrapper>
  )
}

export default ThirdProject