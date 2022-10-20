import {useState, useEffect, useRef} from "react"
import { Wrapper, Heading, RegularText, EquimpentImageContainer, EquimpentImage, MyImageContainer, MyImage } from "./BasedStyle"
import myImage from "../../assets/myImageBased.png"
import equipment from "../../assets/equipment.png"
import { showingPointFunction } from "../../util/showingPointFunction"


const Based = () => {
    const [showAnimation, setShowAnimation] = useState(false)

    const equipmentRef = useRef(null)

    const {showingPoint, elementTop} = showingPointFunction

    const animateEquipment = () => {
        const equipmentPosition = elementTop(equipmentRef.current)
        if(equipmentPosition < showingPoint()) {
            setShowAnimation(true)
        }
    }

    useEffect(() => {
        window.addEventListener(
            "scroll", animateEquipment
        )
        return () => window.removeEventListener("scroll", animateEquipment)
    }, [])

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