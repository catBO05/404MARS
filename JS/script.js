// window.addEventListener('load', function() {
//     const ovni = document.getElementById('ovni');
//     const barraFill = document.getElementById('barraFill');
//     const barraText = document.getElementById('barraText');
    
//     let progreso = 0;
    
//     console.log("Iniciando animación...");
//     console.log("OVNI encontrado:", ovni);
//     console.log("Barra encontrada:", barraFill);
    
//     function animarCarga() {
//     progreso += 1;

//     const nuevaPosicion = progreso + '%';

//     // Actualizar barra
//     barraFill.style.width = nuevaPosicion;
//     barraText.textContent = progreso + '%';

//     // Mover OVNI
//     ovni.style.left = nuevaPosicion;

//     if (progreso < 99) {
//         setTimeout(animarCarga, 50);
//     } else {
//         setTimeout(mostrarError, 500);
//     }
//     }

//     function mostrarError() {
//     const errorScreen = document.getElementById('404-error');
//     errorScreen.classList.remove('hidden');
//     }

//     setTimeout(animarCarga, 1000);
// });


// BARRA DE CARGA + ABRIR 404
document.addEventListener('DOMContentLoaded', function() {
    const loadingBar = document.getElementById('loadingBar');
    const percentage = document.getElementById('percentage');
    const loadingText = document.getElementById('loadingText');
    const errorScreen = document.getElementById('404-error');

    let progress = 0;
    let loadingInterval;
    let errorTriggered = false;

    startLoading();

    function startLoading() {
        progress = 0;
        errorTriggered = false;
        updateProgress();
                
        loadingInterval = setInterval(function() {
            if (!errorTriggered && progress < 100) {
                progress += Math.random() * 3 + 1;

                if (progress >= 98 && !errorTriggered) {
                    progress = 98;
                    triggerError();
                }
                
                updateProgress();
            }
        }, 100);
    }
            
    function updateProgress() {
        loadingBar.style.width = progress + '%';
        percentage.textContent = Math.round(progress) + '%';
    }
            
    function triggerError() {
        errorTriggered = true;
        clearInterval(loadingInterval);
                
        loadingBar.classList.add('error');
        loadingText.classList.add('error');
        loadingText.textContent = 'The connection is failing ...';

        setTimeout(mostrarError, 2450);
    }

    function mostrarError() {
        errorScreen.classList.remove('hidden');
    }
});
