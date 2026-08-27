/* js/animation_effects/video_manager.js */

export function initVideoManager() {
    // Lista de pares de IDs (Desktop e Mobile) para monitorar
    // Adicionei os dois pares que você mencionou nos códigos anteriores
    const videoPairs = [
        { d: 'videoDesktop', m: 'videoMobile' },
        { d: 'videoAboutDesktop', m: 'videoAboutMobile' }
    ];

    const updateVideos = () => {
        const isMobile = window.innerWidth <= 768;

        videoPairs.forEach(pair => {
            const desktopEl = document.getElementById(pair.d);
            const mobileEl = document.getElementById(pair.m);

            if (!desktopEl || !mobileEl) return;

            if (isMobile) {
                // MODO MOBILE
                desktopEl.style.display = 'none';
                mobileEl.style.display = 'block';
                managePlayback(mobileEl, 'play');
                managePlayback(desktopEl, 'pause');
            } else {
                // MODO DESKTOP
                desktopEl.style.display = 'block';
                mobileEl.style.display = 'none';
                managePlayback(desktopEl, 'play');
                managePlayback(mobileEl, 'pause');
            }
        });
    };

    const managePlayback = (container, action) => {
        const iframe = container.querySelector('iframe');
        const video = container.querySelector('video');

        if (video) {
            action === 'play' ? video.play().catch(() => {}) : video.pause();
        } 
        
        if (iframe) {
            try {
                let url = new URL(iframe.src);
                if (action === 'play') {
                    // Só recarrega se o autoplay ainda não estiver lá
                    if (url.searchParams.get('autoplay') !== '1') {
                        url.searchParams.set('autoplay', '1');
                        url.searchParams.set('muted', '1');
                        iframe.src = url.toString();
                    }
                } else {
                    // Ao pausar, removemos o autoplay para o vídeo não tocar escondido
                    if (url.searchParams.has('autoplay')) {
                        url.searchParams.delete('autoplay');
                        iframe.src = url.toString();
                    }
                }
            } catch (e) {
                // Se a URL for inválida ou o link estiver quebrado, não faz nada
            }
        }
    };

    // Inicializa
    updateVideos();

    // Resize com proteção (Debounce)
    let timer;
    window.addEventListener('resize', () => {
        clearTimeout(timer);
        timer = setTimeout(updateVideos, 200);
    });
}