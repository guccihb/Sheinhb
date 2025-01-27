let currentPage = 0;
const pages = document.querySelectorAll('.page');
const totalPages = pages.length;

function goToNextPage() {
    // Ocultar la página actual
    pages[currentPage].classList.remove('active');
    
    // Pasar a la siguiente página
    currentPage = (currentPage + 1) % totalPages;
    
    // Mostrar la nueva página
    pages[currentPage].classList.add('active');
}

// Inicializar la primera página
pages[currentPage].classList.add('active');

// Cambiar página cada 10 segundos
setInterval(goToNextPage, 10000);
