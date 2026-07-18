document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector('.navbar-moderna');

    // Cambia el estilo de la navbar al scrollear
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Cerrar menú móvil automáticamente al clickear un link
    const navLinks = document.querySelectorAll('.nav-link');
    const menuToggle = document.getElementById('navbarNav');
    navLinks.forEach((link) => {
        link.addEventListener('click', () => {
            if (menuToggle.classList.contains('show')) {
                new bootstrap.Collapse(menuToggle).hide();
            }
        });
    });
});