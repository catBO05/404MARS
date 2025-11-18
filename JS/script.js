window.addEventListener('load', function() {
    const ovni = document.getElementById('ovni');
    const barraFill = document.getElementById('barraFill');
    const barraText = document.getElementById('barraText');
    
    let progreso = 0;
    
    console.log("Iniciando animación...");
    console.log("OVNI encontrado:", ovni);
    console.log("Barra encontrada:", barraFill);
    
    function animarCarga() {
    progreso += 1;

    const nuevaPosicion = progreso + '%';

    // Actualizar barra
    barraFill.style.width = nuevaPosicion;
    barraText.textContent = progreso + '%';

    // Mover OVNI
    ovni.style.left = nuevaPosicion;

    if (progreso < 99) {
        setTimeout(animarCarga, 50);
    } else {
        setTimeout(mostrarError, 500);
    }
    }

    function mostrarError() {
    const errorScreen = document.getElementById('404-error');
    errorScreen.classList.remove('hidden');
    }

    setTimeout(animarCarga, 1000);
});

