const burger = document.querySelector(".burger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");

burger.addEventListener("click", ()=> {
    burger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

navLink.forEach(n => n.addEventListener("click", ()=> {
    burger.classList.remove("active");
    navMenu.classList.remove("active");
}));