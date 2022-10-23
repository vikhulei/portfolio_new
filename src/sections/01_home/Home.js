import { Wrapper, Background, ImageNameWrapper, MyImageContainer, MyImage, MyName, LargeHeadingHome, MainTextHome, ButtonEmailWrapper, ButtonHome, EmailHome } from "./HomeStyle"
import myImage from "../../assets/myImageHome.png"


const Home = () => {
    return (
        <Background>
            <Wrapper>
                <ImageNameWrapper>
                    <MyImageContainer>
                        <MyImage src={myImage} alt="myImage" />
                    </MyImageContainer>
                    <MyName>Victor Hulei</MyName>
                </ImageNameWrapper>
                <LargeHeadingHome>Web Developer</LargeHeadingHome>
                <MainTextHome>I am passionate about web development and enjoy creating sites and applications
                </MainTextHome>
                <ButtonEmailWrapper>
                    <ButtonHome href="https://www.linkedin.com/in/vikhulei/" target="_blank">Curriculum Vitae</ButtonHome>
                    <EmailHome href="mailto:vikhulei@gmail.com">vikhulei@gmail.com</EmailHome>
                </ButtonEmailWrapper>
            </Wrapper>
        </Background>
    )
}

export default Home