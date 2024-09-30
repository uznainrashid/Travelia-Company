const preloader = document.querySelector("[data-preloader]");
window.addEventListener("load", () => {
  preloader.classList.add(".remove");
});

// Add event on multiple element
const addEventOnElements = function (elements, eventType, callback){
    for(let i = 0 ; i < elements.length  ; i++){
        elements[i].addEventListener(eventType , callback)
    }
}


// Navbar
const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]")
const overlay = document.querySelector("[data-overlay]");
const Togglenav = function (){
    navbar.classList.add("active")
    overlay.classList.add("active")
    document.body.classList.add("nav-active")
}
addEventOnElements(navTogglers , "click", Togglenav)
console.log(addEventOnElements(navTogglers))


/*  # HEADER */
const header = document.querySelector("[data-header]");
window.addEventListener("scroll", function (){
    header.classList[window.scrollY > 100 ? "add" : "remove"]("active")
})