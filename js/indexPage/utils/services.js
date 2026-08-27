export function initServices() {
    const servicesGrid = document.querySelector('.services-grid');
    const serviceCards = document.querySelectorAll('.service-card');
    if (!servicesGrid) return;

    let activeCard = null;
    let galleryInterval = null; // Guardamos o timer aqui

    const startGallery = (card) => {
        const track = card.querySelector('.gallery-track');
        const slides = card.querySelectorAll('.gallery-slide');
        if (!track || slides.length <= 1) return;

        let currentSlide = 0;
        
        // Limpa intervalo anterior se existir
        clearInterval(galleryInterval);

        galleryInterval = setInterval(() => {
            currentSlide = (currentSlide + 1) % slides.length;
            const offset = currentSlide * -100; // Move 100% por slide
            track.style.transform = `translateX(${offset}%)`;
            
            // Opcional: Atualizar indicadores se você tiver
            card.querySelectorAll('.gallery-slide').forEach((s, i) => {
                s.classList.toggle('active', i === currentSlide);
            });
        }, 3000); // Muda a cada 3 segundos
    };

    const setActiveCard = (card) => {
        clearInterval(galleryInterval); // Para a galeria ao fechar/mudar

        serviceCards.forEach(c => {
            c.classList.remove('active', 'expanded');
        });

        if (card) {
            card.classList.add('active', 'expanded');
            // INICIA O SCROLL AUTOMÁTICO DA GALERIA DESTE CARD
            startGallery(card);
        }
        
        servicesGrid.classList.toggle('has-active', !!card);
        activeCard = card;
    };

    servicesGrid.addEventListener('click', (e) => {
        e.stopPropagation();
        const card = e.target.closest('.service-card');
        if (!card) return;
        activeCard === card ? setActiveCard(null) : setActiveCard(card);
    });
}