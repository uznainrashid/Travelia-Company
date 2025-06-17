const preloader = document.querySelector("[data-preloader]");
window.addEventListener("load", () => {
  preloader.classList.add(".remove");
});

// Add event on multiple element
// const addEventOnElements = function (elements, eventType, callback) {
//   for (let i = 0; i < elements.length; i++) {
//     elements[i].addEventListener(eventType, callback);
//   }
// };
function addEventOnElements(elements, eventType, callback) {
    elements.forEach(element => element.addEventListener(eventType, callback));
    return elements; // This ensures it doesn't return undefined
}

// Navbar
const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");
const Togglenav = function () {
  navbar.classList.add("active");
  overlay.classList.add("active");
  document.body.classList.add("nav-active");
};
addEventOnElements(navTogglers, "click", Togglenav);
console.log(addEventOnElements(navTogglers));

/*  # HEADER */
const header = document.querySelector("[data-header]");
window.addEventListener("scroll", function () {
  header.classList[window.scrollY > 100 ? "add " : "remove"]("active");
});
// Hamburger close button
document.querySelector(".nav-toggle-btn").addEventListener("click", () => {  
  document.querySelector("[data-navbar]").classList.toggle("active");  
});

document.querySelector(".nav-toggle-btn").addEventListener("click", (e) => {
  console.log(e);
  e.views.closed = true;
});
