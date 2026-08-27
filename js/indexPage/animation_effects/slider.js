export function initSlider() {
    const teamSlider = document.querySelector('.team-slider');
    if (!teamSlider) return;

    let currentMember = 0;
    const teamMembers = document.querySelectorAll('.team-member');
    const totalMembers = teamMembers.length;
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.team-nav-btn.prev');
    const nextBtn = document.querySelector('.team-nav-btn.next');
    let autoPlayInterval;

    const showMember = (index) => {
        teamMembers.forEach(member => member.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));

        if (teamMembers[index]) teamMembers[index].classList.add('active');
        if (dots[index]) dots[index].classList.add('active');
        currentMember = index;
    };

    const nextMember = () => showMember((currentMember + 1) % totalMembers);
    const prevMember = () => showMember((currentMember - 1 + totalMembers) % totalMembers);

    // Eventos de Clique
    nextBtn?.addEventListener('click', nextMember);
    prevBtn?.addEventListener('click', prevMember);
    dots.forEach((dot, index) => dot.addEventListener('click', () => showMember(index)));

    // Auto-play
    const startAutoPlay = () => autoPlayInterval = setInterval(nextMember, 5000);
    const stopAutoPlay = () => clearInterval(autoPlayInterval);

    teamSlider.addEventListener('mouseenter', stopAutoPlay);
    teamSlider.addEventListener('mouseleave', startAutoPlay);
    startAutoPlay();

    // Navegação por Teclado
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') prevMember();
        if (e.key === 'ArrowRight') nextMember();
    });

    // Touch Support (Mobile Swipe)
    let touchStartX = 0;
    teamSlider.addEventListener('touchstart', e => touchStartX = e.changedTouches[0].screenX, {passive: true});
    teamSlider.addEventListener('touchend', e => {
        const touchEndX = e.changedTouches[0].screenX;
        if (touchEndX < touchStartX - 50) nextMember();
        if (touchEndX > touchStartX + 50) prevMember();
    }, {passive: true});
}