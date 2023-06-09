document.addEventListener("scroll", function () {
    var box1 = document.querySelector(".box1");
    var box2 = document.querySelector(".box2");
    var box1Position = box1.getBoundingClientRect().top;
    var box2Position = box2.getBoundingClientRect().top;
    var windowHeight = window.innerHeight;

    if (box1Position < windowHeight) {
        box1.classList.add("visible");
    } else {
        box1.classList.remove("visible");
    }

    if (box2Position < windowHeight) {
        box2.classList.add("visible");
    } else {
        box2.classList.remove("visible");
    }
});