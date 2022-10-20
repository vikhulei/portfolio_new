import { Wrapper, ImageDescriptionWrapper, ImageContainer, Image, Description, LinksWrapper, LinkContainer, LinkTextContainer, LinkTextView, LinkTextAddress, IconImage, TechnologyImageContainer, TechnologyImage } from "./FirstProjectStyle"
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
        This is contact management application with authentication and the options to view, create, update and delete the contacts. The password is <em>Pa$$word</em>, of course &#128513;
        </Description>
      </ImageDescriptionWrapper>

      <LinksWrapper>
        <LinkContainer>
          <IconImage src={github} alt="github_image" />
          <LinkTextContainer>
            <LinkTextView>
              View on GitHub
            </LinkTextView>
            <LinkTextAddress href="https://github.com/vikhulei/contact_store_v2">
            https://github.com/ vikhulei/ contact_store_v2
            </LinkTextAddress>
          </LinkTextContainer>
        </LinkContainer>
        <LinkContainer>
          <IconImage src={surge} alt="githubpages_image" />
          <LinkTextContainer>
            <LinkTextView>
              Run on Surge platform
            </LinkTextView>
            <LinkTextAddress href="http://contactstore.surge.sh/">
            http://contactstore. surge. sh
            </LinkTextAddress>
          </LinkTextContainer>
        </LinkContainer>
        <TechnologyImageContainer>
          <TechnologyImage src={redux2} alt="html_image" />
        </TechnologyImageContainer>
      </LinksWrapper>
    </Wrapper>
  )
}

export default ThirdProject