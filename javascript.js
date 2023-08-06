// to make elements reveal themselves only when they
// are scrolled past a certain point of the screen
function reveal() {
    var reveals = document.querySelectorAll(".reveal")
    for (var i = 0; i < reveals.length; i++) {
        // height of the viewport
        var windowHeight = window.innerHeight
        // distance of the element from the top of the viewport
        var elementTop = reveals[i].getBoundingClientRect().top
        // height which the element should reveal itself
        var elementVisible = 150

        // if element's distance from the bottom is more than elementTop, add the class active to it
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active")
        }
        else {
            reveals[i].classList.remove("active")
        }
    }
}

// to check the scroll position on page load
window.addEventListener("scroll", reveal)

// data attribute to prevent overlap of class names
const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const offset = button.dataset.carouselButton === "next" ? 1 : -1
        const slides = button.closest("[data-carousel]").querySelector("[data-slides]")

        const activeSlide = slides.querySelector("[data-active]")
        let newIndex = [...slides.children].indexOf(activeSlide) + offset
        // going to the last slide if we run out of prev images
        if (newIndex < 0)
        newIndex = slides.children.length - 1
        // going to the first slide if we run out of next images
        if (newIndex >= slides.children.length)
        newIndex = 0

        slides.children[newIndex].dataset.active = true
        delete activeSlide.dataset.active
    })
})