export function initAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    const elementsToAnimate = ['.about-content', '.service-card', '.portfolio-item', '.stat'];
    
    elementsToAnimate.forEach(selector => {
        document.querySelectorAll(selector).forEach(el => {
            el.classList.add('fade-in');
            observer.observe(el);
        });
    });
}


// Adicione estas funções ao seu arquivo animations.js

export function initParallax() {
    const heroContent = document.querySelector('.hero-content');
    
    // Usamos um listener de scroll simples ou o throttle que você criou
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        if (heroContent && scrolled < window.innerHeight) {
            // Efeito de profundidade: o conteúdo sobe mais devagar que o scroll
            heroContent.style.transform = `translateY(${scrolled * 0.4}px)`;
            heroContent.style.opacity = 1 - (scrolled / (window.innerHeight * 0.8));
        }
    });
}