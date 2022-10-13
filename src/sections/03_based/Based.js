import { Wrapper, Heading, RegularText, EquimpentImageContainer, EquimpentImage, MyImageContainer, MyImage } from "./BasedStyle"
import myImage from "../../assets/myImageBased.png"
import equipment from "../../assets/equipment.png"


const Based = () => {
    return (
        <Wrapper>
            <MyImageContainer>
                <MyImage
                    src={myImage}
                    alt="my image"
                />
            </MyImageContainer>
            <Heading>
                Open to work remotly and on site
            </Heading>
            <RegularText>
                I am based in Stratfrod-upon-Avon, can travel 15-20 miles to work on site or further in case of hybrid work.
                Have experience of solo working as well as in teams in my previous roles
            </RegularText>
            <EquimpentImageContainer>
                <EquimpentImage
                src={equipment} alt="equipment"
                />
            </EquimpentImageContainer>
        </Wrapper>
    )
}

export default Based