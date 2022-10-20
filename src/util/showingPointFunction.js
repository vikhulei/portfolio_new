export const showingPointFunction = {
    showingPoint: () => (window.innerHeight - (window.innerHeight*5/100)),
    elementTop: (elementName) => elementName.getBoundingClientRect().top
}