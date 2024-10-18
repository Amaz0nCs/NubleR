<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400&family=Montserrat:wght@700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="styles.css"> <!-- Enlace a tu CSS -->
    <title>ÑubleRecicla</title>
</head>
<body>
    <header>
        <div class="logo">
            <h1>ÑubleRecicla</h1>
        </div>
        <nav>
            <ul class="menu">
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Nuestra App</a></li>
                <li><a href="#">Nosotros</a></li>
                <li><a href="#">Contáctanos</a></li>
            </ul>
            <a href="#" class="login-button">Iniciar Sesión</a>
        </nav>
    </header>

    <section class="hero">
        <div class="text-content">
            <p class="tagline">Recicla con impacto y transforma Ñuble.</p>
            <h2 class="headline">La ECO experiencia de Ñuble</h2>
            <p class="description">Conecta con la comunidad de reciclaje de Chillán para transformar tu manera de contribuir al medio ambiente</p>
            <div class="cta-buttons">
                <a href="#" class="btn prueba">Pruébalo Gratis</a>
                <a href="#" class="btn proceso">Ver Proceso</a>
            </div>
        </div>
        <div class="image-wrapper">
            <div class="image-border">
                <img class="mountain-image" src="imagen2.jpeg" alt="AQUI VA FOTO IGNORAR">
            </div>
        </div>
    </section>

    <div class="carrusel">
        <div class="carrusel-container">
            <div class="carrusel-item">
                <img src="imagen1.jpeg" alt="Descripción de la imagen 1">
            </div>
            <div class="carrusel-item">
                <img src="imagen2.jpeg" alt="Descripción de la imagen 2">
            </div>
            <div class="carrusel-item">
                <img src="imagen1.jpeg" alt="Descripción de la imagen 3">
            </div>
        </div>
        <button class="carrusel-btn prev">❮</button>
        <button class="carrusel-btn next">❯</button>
    </div>

    <footer>
        <p>© 2024 ÑubleRecicla. Todos los derechos reservados.</p>
    </footer>

    <script src="script.js"></script> <!-- Enlace al JavaScript -->
</body>
</html>