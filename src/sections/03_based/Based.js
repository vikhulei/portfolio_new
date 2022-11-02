import { useRef } from "react"
import {
    Wrapper,
    Heading,
    RegularText,
    EquimpentImageContainer,
    EquimpentImage,
    MyImageContainer,
    MyImage
} from "./BasedStyle"
import myImage from "../../assets/myImageBased.png"
import equipment from "../../assets/equipment.png"
import useAnimation from "../../util/useAnimation"


const Based = () => {
    const equipmentRef = useRef(null)
    const showAnimation = useAnimation(equipmentRef)
    return (
        <Wrapper>
            <Heading>
                Open to work remotly and on site
            </Heading>
            <RegularText>
                I am based in Stratfrod-upon-Avon, can travel 15-20 miles to work on site or further in case of hybrid work.
                Have experience of solo working as well as in teams in my previous roles
            </RegularText>
            <EquimpentImageContainer
            showAnimation={showAnimation}
            ref={equipmentRef}
            >
                <EquimpentImage
                src={equipment} alt="equipment"
                />
            </EquimpentImageContainer>
            <MyImageContainer>
                <MyImage
                    src={myImage}
                    alt="my image"
                />
            </MyImageContainer>
        </Wrapper>
    )
}

export default Based