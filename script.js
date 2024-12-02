let slideIndex = 0;

function mostrarSlide(index) {
    const slides = document.querySelectorAll(".slide");
    if (index >= slides.length) slideIndex = 0;
    if (index < 0) slideIndex = slides.length - 1;

    const offset = slideIndex * -100;
    document.querySelector(".slides").style.transform = `translateX(${offset}%)`;
}

function mudarSlide(direcao) {
    slideIndex += direcao;
    mostrarSlide(slideIndex);
}

// Carrossel automático
setInterval(() => {
    slideIndex++;
    mostrarSlide(slideIndex);
}, 3000);

// Inicia o carrossel no slide 0
document.addEventListener("DOMContentLoaded", () => {
    mostrarSlide(slideIndex);
});
