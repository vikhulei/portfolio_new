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

import { Wrapper, LinksWrapper } from "./SecondProjectStyle"

import church from "../../assets/church.jpg"
import github from "../../assets/icons/github.png"
import surge from "../../assets/icons/surge.png"
import reactRouter from "../../assets/icons/reactRouter.png"

const SecondProject = () => {
  return (
    <Wrapper>
      <LinksWrapper>
        <LinkContainerProjects>
          <IconProjects src={github} alt="github_image" />
          <LinkTextContainerProjects>
            <LinkTextViewProjects>
              View on GitHub
            </LinkTextViewProjects>
            <LinkTextAddressProjects href="https://github.com/vikhulei/bethany_church">
              https://github.com/ vikhulei/ bethany_church
            </LinkTextAddressProjects>
          </LinkTextContainerProjects>
        </LinkContainerProjects>
        <LinkContainerProjects>
          <IconProjects src={surge} alt="githubpages_image" />
          <LinkTextContainerProjects>
            <LinkTextViewProjects>
              Run on Surge platform
            </LinkTextViewProjects>
            <LinkTextAddressProjects href="https://bethanynivki.surge.sh/">
              https://bethanynivki. surge. sh/
            </LinkTextAddressProjects>
          </LinkTextContainerProjects>
        </LinkContainerProjects>
        <TechnologyImageContainerProjects>
          <TechnologyImageProjects src={reactRouter} alt="html_image" />
        </TechnologyImageContainerProjects>
      </LinksWrapper>
      <ImageDescriptionWrapperProjects>
        <ImageContainerProjects>
          <ImageProjects src={church} alt="image_safety" />
        </ImageContainerProjects>
        <DescriptionProjects>
          This small website was created for an existing church in Kyiv. It has a landing page, a brief history, a schedule of services and a <em> Message-Us </em> page.
        </DescriptionProjects>
      </ImageDescriptionWrapperProjects>
    </Wrapper>
  )
}

export default SecondProject