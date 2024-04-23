
document.addEventListener("DOMContentLoaded", function() {
    var carousel = document.getElementById('indicators-carousel');
    var carouselItems = carousel.querySelectorAll('[data-carousel-item]');
    var carouselPrev = carousel.querySelector('[data-carousel-prev]');
    var carouselNext = carousel.querySelector('[data-carousel-next]');
    var carouselIndicators = carousel.querySelectorAll('[data-carousel-slide-to]');
    
    var currentSlide = 0;
    var interval = 5000; // Intervalo de cambio en milisegundos

    function showSlide(index) {
        if (index < 0) {
            currentSlide = carouselItems.length - 1;
        } else if (index >= carouselItems.length) {
            currentSlide = 0;
        } else {
            currentSlide = index;
        }

        carouselItems.forEach(item => {
            item.classList.add('hidden');
        });

        carouselItems[currentSlide].classList.remove('hidden');
        carouselIndicators.forEach((indicator, i) => {
            if (i === currentSlide) {
                indicator.setAttribute('aria-current', 'true');
            } else {
                indicator.setAttribute('aria-current', 'false');
            }
        });
    }

    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    carouselPrev.addEventListener('click', function() {
        showSlide(currentSlide - 1);
    });

    carouselNext.addEventListener('click', function() {
        nextSlide();
    });

    carouselIndicators.forEach((indicator, i) => {
        indicator.addEventListener('click', function() {
            showSlide(i);
        });
    });

    // Función para pasar automáticamente al siguiente slide
    setInterval(nextSlide, interval);

    // Mostrar slide inicial
    showSlide(0);
});