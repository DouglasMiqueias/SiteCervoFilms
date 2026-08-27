/* js/animation_effects/reviews.js */

export function initReviews() {
    const el = document.getElementById('reviewsCarousel');
    if (!el) return;

    const track    = el.querySelector('.rv__track');
    const viewport = el.querySelector('.rv__viewport');
    const btnPrev  = el.querySelector('.rv__arrow--prev');
    const btnNext  = el.querySelector('.rv__arrow--next');
    
    if (!track || !viewport || !btnPrev || !btnNext) return;

    // --- Config ---
    const GAP         = 24; 
    const AUTOPLAY_MS   = 4000;

    // --- Originais e Clones ---
    const originals = Array.from(track.children);
    const total     = originals.length;
    if (total === 0) return;

    // Clona os cards para o loop infinito
    originals.forEach(card => {
        const clone = card.cloneNode(true);
        clone.setAttribute('aria-hidden', 'true');
        track.appendChild(clone);
    });

    // --- Estado ---
    let idx        = 0;
    let sliding    = false;
    let timer      = null;
    let pauseTimer = null;

    // --- Helpers ---
    const perView = () => window.innerWidth <= 768 ? 1 : 2;

    const cardWidth = () => {
        const vw = viewport.offsetWidth;
        const pv = perView();
        return (vw - GAP * (pv - 1)) / pv;
    };

    const moveTo = (i, animate) => {
        const cw = cardWidth();
        const offset = -(i * (cw + GAP));
        track.classList.toggle('is-sliding', animate);
        track.style.transform = `translateX(${offset}px)`;
    };

    // --- Ações ---
    const slideNext = () => {
        if (sliding) return;
        sliding = true;
        idx++;
        moveTo(idx, true);
    };

    const slidePrev = () => {
        if (sliding) return;
        sliding = true;
        idx--;
        if (idx < 0) {
            idx = total - 1;
            moveTo(total, false); // Posição do clone
            void track.offsetWidth; // Force reflow
            moveTo(idx, true);
        } else {
            moveTo(idx, true);
        }
    };

    // --- Eventos ---
    track.addEventListener('transitionend', (e) => {
        if (e.target !== track) return;
        sliding = false;
        if (idx >= total) {
            idx = 0;
            moveTo(0, false);
        }
    });

    const play = () => {
        stop();
        timer = setInterval(slideNext, AUTOPLAY_MS);
    };

    const stop = () => {
        clearInterval(timer);
        timer = null;
    };

    btnNext.addEventListener('click', () => {
        slideNext();
        stop();
        clearTimeout(pauseTimer);
        pauseTimer = setTimeout(play, 6000);
    });

    btnPrev.addEventListener('click', () => {
        slidePrev();
        stop();
        clearTimeout(pauseTimer);
        pauseTimer = setTimeout(play, 6000);
    });

    el.addEventListener('mouseenter', stop);
    el.addEventListener('mouseleave', play);

    window.addEventListener('resize', () => {
        clearTimeout(pauseTimer);
        pauseTimer = setTimeout(() => moveTo(idx, false), 200);
    });

    // Init
    moveTo(0, false);
    play();
}