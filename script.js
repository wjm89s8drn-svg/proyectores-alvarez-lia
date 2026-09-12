/** Javascript es un lenguaje de programacion que nos permite
 * hacer que nuestra pagina web sea interactiva y dinamica.
*/


/ESTO ES UN COMENTARIO/

//Este script pertenece al desarrollo web de SupplyMatch, que tiene//
//los derechos de autor reservados a Lia Valentina//

// Primero vamos a generar movimiento al carrusel//

const carouselTrack = document.getElementById("carouselTrack");
const slides = document.querySelectorAll(".carousel-slide");
const prevButton = document.getElementById("carouselPrev");
const nextButton = document.getElementById("carouselNext");
const dotsContainer = document.getElementById("carouselDots");

let currentSlide = 0;
let autoPlay;

slides.forEach((slide, index) => {
    const dot = document.createElement("button");
    dot.classList.add("carousel-dot");

    if (index === 0) {
        dot.classList.add("active");
    }

    dot.addEventListener("click", () => {
        currentSlide = index;
        updateCarousel();
        restartAutoPlay();
    });

    dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".carousel-dot");

function updateCarousel() {
    carouselTrack.style.transform = `translateX(-${currentSlide * 100}%)`;

    dots.forEach((dot, index) => {
        dot.classList.toggle("active", index === currentSlide);
    });
}

function nextSlide() {
    currentSlide++;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    updateCarousel();
}

function previousSlide() {
    currentSlide--;

    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }

    updateCarousel();
}

nextButton.addEventListener("click", () => {
    nextSlide();
    restartAutoPlay();
});

prevButton.addEventListener("click", () => {
    previousSlide();
    restartAutoPlay();
});

function startAutoPlay() {
    autoPlay = setInterval(nextSlide, 4000);
}

function restartAutoPlay() {
    clearInterval(autoPlay);
    startAutoPlay();
}

startAutoPlay();