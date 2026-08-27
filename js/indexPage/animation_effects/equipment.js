export function initEquipmentCarousel() {
    const track = document.querySelector('.carousel-track');
    const nextBtn = document.querySelector('.carousel-next');
    const cards = document.querySelectorAll('.camera-card');
    
    if (!track || cards.length === 0) return;

    let currentIndex = 0;
    const totalCards = cards.length;
    const cardsPerView = 2; 
    const maxIndex = totalCards - cardsPerView;

    function updateCarousel() {
        // ESSENCIAL: Se o seu CSS usa 'show-card-3', o JS tem que colocar EXATAMENTE isso
        if (currentIndex === maxIndex) {
            track.classList.add('show-card-3');
        } else {
            track.classList.remove('show-card-3');
            // Se houver mais posições (ex: card 2), você precisaria de classes como 'show-card-2'
            track.style.transform = `translateX(-${currentIndex * (100 / totalCards)}%)`;
        }
    }

    // SCROLL AUTOMÁTICO (Adicione isso aqui)
    let autoPlay = setInterval(() => {
        currentIndex = (currentIndex < maxIndex) ? currentIndex + 1 : 0;
        updateCarousel();
    }, 5000); // Muda a cada 5 segundos

    // Para o autoplay quando o usuário clica em algo
    const stopAutoPlay = () => clearInterval(autoPlay);

    nextBtn?.addEventListener('click', () => {
        stopAutoPlay();
        currentIndex = (currentIndex < maxIndex) ? currentIndex + 1 : 0;
        updateCarousel();
    });
}