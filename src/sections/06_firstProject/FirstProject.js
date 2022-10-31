import { Wrapper, LinksWrapper } from "./FirstProjectStyle"

import { ImageDescriptionWrapperProjects,
  ImageContainerProjects,
  ImageProjects,
  DescriptionProjects,
  LinkContainerProjects,
  LinkTextContainerProjects,
  LinkTextViewProjects,
  LinkTextAddressStyled,
  IconProjects,
  TechnologyImageContainer,
  TechnologyImage } from "../../components/ProjectsComponents"

import contactStore from "../../assets/contactStore.jpg"
import github from "../../assets/icons/github.png"
import surge from "../../assets/icons/surge.png"
import redux2 from "../../assets/icons/redux2.png"

const ThirdProject = () => {
  return (
    <Wrapper>
      <ImageDescriptionWrapperProjects>
        <ImageContainerProjects>
          <ImageProjects src={contactStore} alt="image_safety" />
        </ImageContainerProjects>
        <DescriptionProjects>
        This is contact management application with authentication and the options to view, create, update and delete the contacts. The password is <em>Pa$$word</em>, of course &#128513;
        </DescriptionProjects>
      </ImageDescriptionWrapperProjects>

      <LinksWrapper>
        <LinkContainerProjects>
          <IconProjects src={github} alt="github_image" />
          <LinkTextContainerProjects>
            <LinkTextViewProjects>
              View on GitHub
            </LinkTextViewProjects>
            <LinkTextAddressStyled href="https://github.com/vikhulei/contact_store_v2">
            https://github.com/ vikhulei/ contact_store_v2
            </LinkTextAddressStyled>
          </LinkTextContainerProjects>
        </LinkContainerProjects>
        <LinkContainerProjects>
          <IconProjects src={surge} alt="githubpages_image" />
          <LinkTextContainerProjects>
            <LinkTextViewProjects>
              Run on Surge platform
            </LinkTextViewProjects>
            <LinkTextAddressStyled href="http://contactstore.surge.sh/">
            http://contactstore. surge. sh
            </LinkTextAddressStyled>
          </LinkTextContainerProjects>
        </LinkContainerProjects>
        <TechnologyImageContainer>
          <TechnologyImage src={redux2} alt="html_image" />
        </TechnologyImageContainer>
      </LinksWrapper>
    </Wrapper>
  )
}

export default ThirdProject