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





document.addEventListener('DOMContentLoaded', function() {
    const loadingBar = document.getElementById('loadingBar');
    const percentage = document.getElementById('percentage');
    const loadingText = document.getElementById('loadingText');
            
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
                progress += Math.random() * 3 + 1; // Progreso variable
                
                if (progress >= 85 && !errorTriggered) {
                    progress = 85;
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
                
        // Aplicar efectos de error
        loadingBar.classList.add('error');
        loadingText.classList.add('error');
        loadingText.textContent = 'The connection is failing ...';          
    }

    // MOSTRAR PG ERROR 404
   if (progress < 85) {
        setTimeout(animarCarga, 50);
    } else {
        setTimeout(mostrarError, 500);
    }

    function mostrarError() {
    const errorScreen = document.getElementById('404-error');
    errorScreen.classList.remove('hidden');
    }
});


// OVNI MOVIENDOSE
document.addEventListener('DOMContentLoaded', function() {
    const img = document.getElementById('animationImage');
    const stage = document.getElementById('animationArea');

    if (!img || !stage) {
        console.error('Elementos no encontrados. Verifica los IDs en el HTML.');
        return;
    }

    console.log('OVNI animación de crecimiento iniciada');

    // Fases de la animación
    let phase = 'growing'; // 'growing', 'exiting'
    let current = { 
        x: 20, 
        y: 50, 
        rotation: 0, 
        scale: 1,  // Empieza pequeño
        opacity: 1 
    };

    // Objetivos para cada fase
    const growthTarget = { x: 50, y: 50, scale: 3.0, rotation: 20 };
    const exitTarget = { x: 50, y: -50, scale: 4.0, rotation: 0 };

    function animate() {
        switch (phase) {
            case 'growing':
                // Crecer en el centro mientras gira
                current.x += (growthTarget.x - current.x) * 0.02;
                current.y += (growthTarget.y - current.y) * 0.02;
                current.scale += (growthTarget.scale - current.scale) * 0.03;
                current.rotation += (growthTarget.rotation - current.rotation) * 0.05;

                // Cambiar a fase de salida cuando esté suficientemente grande
                if (current.scale >= 7.5) {
                    phase = 'exiting';
                    console.log('Iniciando salida de pantalla...');
                }
                break;

            case 'exiting':
                // Salir hacia arriba mientras sigue creciendo
                current.x += (exitTarget.x - current.x) * 0.05;
                current.y += (exitTarget.y - current.y) * 0.05;
                current.scale += (exitTarget.scale - current.scale) * 0.02;
                current.rotation += (exitTarget.rotation - current.rotation) * 0.08;

                // Efecto de desvanecimiento cuando esté saliendo
                if (current.y < 10) {
                    current.opacity = Math.max(0, current.y / 20 + 0.3);
                    img.style.opacity = current.opacity;
                }

                // Ocultar cuando salga completamente
                if (current.y < -60) {
                    console.log('👋 OVNI ha desaparecido');
                    img.style.display = 'none';
                    return; // Detener animación
                }
                break;
        }

        // Aplicar todas las transformaciones
        img.style.left = current.x + '%';
        img.style.top = current.y + '%';
        img.style.transform = `translate(-50%, -50%) rotate(${current.rotation}deg) scale(${current.scale})`;
        img.style.opacity = current.opacity;

        requestAnimationFrame(animate);
    }

    animate();
});