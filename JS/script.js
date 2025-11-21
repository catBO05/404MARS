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
