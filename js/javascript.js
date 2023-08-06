function reveal() {
    var reveals = document.querySelectorAll(".reveal")
    for (var i = 0; i < reveals.length; i++) {
        // height of the viewport
        var windowHeight = window.innerHeight;
        // distance of the element from the top of the viewport
        var elementTop = reveals[i].getBoundingClientRect().top;
        // height which the element should reveal itself
        var elementVisible = 150;

        // if element's distance from the bottom is more than elementTop, add the class active to it
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
        else {
            reveals[i].classList.remove("active");  
        }
    }
}

window.addEventListener("scroll", reveal);

// to check the scroll position on page load
reveal();