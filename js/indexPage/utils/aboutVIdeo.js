export function initAboutSection() {
    const desktopContainer = document.getElementById('videoAboutDesktop');
    const mobileContainer = document.getElementById('videoAboutMobile');

    if (!desktopContainer && !mobileContainer) return;

    const handleVideoDisplay = () => {
        const isMobile = window.innerWidth <= 768;

        if (isMobile) {
            // MODO MOBILE
            if (desktopContainer) desktopContainer.style.display = 'none';
            if (mobileContainer) {
                mobileContainer.style.display = 'block';
                togglePlay(mobileContainer, true);
            }
            if (desktopContainer) togglePlay(desktopContainer, false);
        } else {
            // MODO DESKTOP
            if (mobileContainer) mobileContainer.style.display = 'none';
            if (desktopContainer) {
                desktopContainer.style.display = 'block';
                togglePlay(desktopContainer, true);
            }
            if (mobileContainer) togglePlay(mobileContainer, false);
        }
    };

    // Função segura para dar Play/Pause em Iframes ou Vídeos nativos
    function togglePlay(container, shouldPlay) {
        const iframe = container.querySelector('iframe');
        const video = container.querySelector('video');

        if (video) {
            shouldPlay ? video.play().catch(() => {}) : video.pause();
        }

        if (iframe) {
            try {
                let url = new URL(iframe.src);
                if (shouldPlay) {
                    url.searchParams.set('autoplay', '1');
                    url.searchParams.set('muted', '1'); // Autoplay exige 'muted' na maioria dos browsers
                } else {
                    url.searchParams.delete('autoplay');
                }
                
                // Só atualiza o src se houver mudança real para evitar loops
                if (iframe.src !== url.toString()) {
                    iframe.src = url.toString();
                }
            } catch (e) {
                // Caso a URL seja relativa ou inválida
            }
        }
    }

    // Inicialização e Eventos
    handleVideoDisplay();
    
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(handleVideoDisplay, 200);
    });
}