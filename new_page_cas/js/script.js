// sidebar open close js code
let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");
let mainContentContainer = document.querySelector(".main-content"); // Selector del contenedor de contenido principal

menuOpenBtn.onclick = function () {
    navLinks.style.left = "0";
    document.body.style.overflow = "hidden"; // Oculta el desplazamiento del cuerpo principal
}
menuCloseBtn.onclick = function () {
    navLinks.style.left = "-100%";
    document.body.style.overflow = "auto"; // Habilita el desplazamiento del cuerpo principal
}

// Restaura el desplazamiento del cuerpo principal cuando se cierra el menú
navLinks.addEventListener("transitionend", function () {
    if (navLinks.style.left === "-100%") {
        document.body.style.overflow = "auto"; // Habilita el desplazamiento del cuerpo principal
    }
});
// sidebar submenu open close js code
let htmlcssArrow = document.querySelector(".htmlcss-arrow");
htmlcssArrow.addEventListener("click", function (e) {
    e.preventDefault();
    navLinks.classList.toggle("show1");
});


let moreArrow = document.querySelector(".more-arrow");
moreArrow.onclick = function () {
    navLinks.classList.toggle("show2");
}
let jsArrow = document.querySelector(".js-arrow");
jsArrow.onclick = function () {
    navLinks.classList.toggle("show3");
}

let othersArrow = document.querySelector(".others-arrow");
othersArrow.onclick = function () {
    navLinks.classList.toggle("show4");
}