import {
  ImageDescriptionWrapperProjects,
  ImageContainerProjects,
  ImageProjects,
  DescriptionProjects,
  LinkContainerProjects,
  LinkTextContainerProjects,
  LinkTextViewProjects,
  LinkTextAddressProjects,
  IconProjects,
  TechnologyImageContainerProjects,
  TechnologyImageProjects
} from "../../components/ProjectsComponents"
import { Wrapper, LinksWrapper } from "./FirstProjectStyle"
import contactStore from "../../assets/contactStore.jpg"
import github from "../../assets/icons/github.png"
import surge from "../../assets/icons/surge.png"
import redux2 from "../../assets/icons/redux2.png"

const FirstProject = () => {
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
            <LinkTextAddressProjects href="https://github.com/vikhulei/contact_store_v2">
            https://github.com/ vikhulei/ contact_store_v2
            </LinkTextAddressProjects>
          </LinkTextContainerProjects>
        </LinkContainerProjects>
        <LinkContainerProjects>
          <IconProjects src={surge} alt="githubpages_image" />
          <LinkTextContainerProjects>
            <LinkTextViewProjects>
              Run on Surge platform
            </LinkTextViewProjects>
            <LinkTextAddressProjects href="http://contactstore.surge.sh/">
            http://contactstore. surge. sh
            </LinkTextAddressProjects>
          </LinkTextContainerProjects>
        </LinkContainerProjects>
        <TechnologyImageContainerProjects>
          <TechnologyImageProjects src={redux2} alt="html_image" />
        </TechnologyImageContainerProjects>
      </LinksWrapper>
    </Wrapper>
  )
}

export default FirstProject