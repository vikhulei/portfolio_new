import { Wrapper, ImageNameWrapper, MyImageContainer, MyImage, MyName, LargeHeadingHome, MainTextHome, ButtonEmailWrapper, ButtonHome, EmailHome } from "./HomeStyle"
import myImage from "../../assets/myImageHome.png"


const Home = () => {
    return (
        <Wrapper>
            <ImageNameWrapper>
                <MyImageContainer>
                    <MyImage src={myImage} alt="myImage" />
                </MyImageContainer>
                <MyName>Victor Hulei</MyName>
            </ImageNameWrapper>
            <LargeHeadingHome>Web Developer</LargeHeadingHome>
            <MainTextHome>I am passionate about web development and enjoy creating sites and applications.
            </MainTextHome>
            <ButtonEmailWrapper>
                <ButtonHome>Curriculum Vitae</ButtonHome>
                <EmailHome>vikhulei@gmail.com</EmailHome>
            </ButtonEmailWrapper>
        </Wrapper>
    )
}

export default Home