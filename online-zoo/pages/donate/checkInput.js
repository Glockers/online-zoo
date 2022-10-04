let input = document.querySelector(".donate-range__input")
if (window.innerWidth <= 1150) {
    input.setAttribute("max", 8)
    if (window.innerWidth <= 970) {
        input.setAttribute("max", 5)
    }
} else {
    input.setAttribute("max", 8)
}
window.addEventListener("resize", () => {
    if (window.innerWidth <= 1150) {
        input.setAttribute("max", 8)
        if (window.innerWidth <= 970) {
            input.setAttribute("max", 5)
        }
    } else {
        input.setAttribute("max", 8)
    }
})