export const showingPointFunction = {
    showingPoint: () => (window.innerHeight - (window.innerHeight*10/100)),
    elementTop: (elementName) => elementName.getBoundingClientRect().top
}