import { useState, useEffect } from "react"

const useAnimation = (iconsRef) => {
    const [showAnimation, setShowAnimation] = useState(false)
    const animateElement = () => {
        const showingPoint = (window.innerHeight - (window.innerHeight * 10 / 100));
        const iconsPos = iconsRef.current.getBoundingClientRect().top
        if (iconsPos < showingPoint) {
            setShowAnimation(true)
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", animateElement)
        return () => window.removeEventListener("scroll", animateElement)
    }, [])
    return showAnimation
}

export default useAnimation