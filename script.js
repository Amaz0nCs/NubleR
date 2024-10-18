const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const carruselContainer = document.querySelector('.carrusel-container');

let currentIndex = 0;

function updateCarrusel() {
    const totalItems = document.querySelectorAll('.carrusel-item').length;
    const offset = -currentIndex * 100; // Cada imagen ocupa 100% del ancho
    carruselContainer.style.transform = `translateX(${offset}%)`;

    // Asegurarse de que los botones estén habilitados/deshabilitados correctamente
    prevButton.disabled = currentIndex === 0;
    nextButton.disabled = currentIndex === totalItems - 1;
}

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarrusel();
    }
});

nextButton.addEventListener('click', () => {
    const totalItems = document.querySelectorAll('.carrusel-item').length;
    if (currentIndex < totalItems - 1) {
        currentIndex++;
        updateCarrusel();
    }
});

// Inicializar el carrusel al cargar
updateCarrusel();
