<script>
    const prevButton = document.querySelector('.carrusel-btn.prev');
    const nextButton = document.querySelector('.carrusel-btn.next');
    const carruselContainer = document.querySelector('.carrusel-container');
    let currentIndex = 0;

    const updateCarrusel = () => {
        const items = document.querySelectorAll('.carrusel-item');
        const totalItems = items.length;
        const translateX = -currentIndex * 100; // Cambia el 100 por el ancho del carrusel
        carruselContainer.style.transform = `translateX(${translateX}%)`;

        // Ajusta el botón anterior
        prevButton.style.display = currentIndex === 0 ? 'none' : 'block';
        // Ajusta el botón siguiente
        nextButton.style.display = currentIndex === totalItems - 1 ? 'none' : 'block';
    };

    nextButton.addEventListener('click', () => {
        const items = document.querySelectorAll('.carrusel-item');
        if (currentIndex < items.length - 1) {
            currentIndex++;
            updateCarrusel();
        }
    });

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarrusel();
        }
    });

    // Inicializar el carrusel
    updateCarrusel();
</script>
