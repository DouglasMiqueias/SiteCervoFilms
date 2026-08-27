import { initNavigation, initActiveNav } from './animation_effects/navigation.js';
import { initAnimations, initParallax } from './animation_effects/animations.js';
import { initCounters } from './animation_effects/counters.js';
import { initReviews } from './animation_effects/reviews.js';
import { initEquipmentCarousel } from './animation_effects/equipment.js';
import { initAboutSection } from './utils/aboutVIdeo.js';
import { initVideoManager } from './utils/videoManager.js';

import { initPreloader, throttle } from './utils/utils.js';
import { initServices } from './utils/services.js';
import { observeFadeIn } from '../utils/intersection-observer.js';

document.addEventListener('DOMContentLoaded', () => {
    // Ordem de execução importa para a percepção do usuário
    initPreloader();    // Prepara a saída do loader
    initNavigation();   // Menu pronto para uso
    initAnimations();   // Fade-ins ao scroll
    initParallax();     // Movimento na Hero
    initCounters();     // Números animados
    initServices();     // Interação dos serviçoss
    initActiveNav(throttle);   // Destaque do menu conforme a seção
    initReviews();     // Depoimentos animados
    initEquipmentCarousel(); // Carrossel de equipamentos
    initAboutSection();  // Lógica de vídeo na seção "Sobre"
    initVideoManager(); // Gerenciamento de vídeos para desktop/mobile

    // Initialize portfolio cards using unified observer system
    const portfolioCards = document.querySelectorAll('.portfolio-card');
    if (portfolioCards.length > 0) {
        observeFadeIn(portfolioCards, { delay: 50 });
        
        // Setup overlay hover effects (grayscale handled by CSS utility class)
        portfolioCards.forEach(card => {
            const overlay = card.querySelector('.portfolio-overlay');
            
            if (overlay) {
                card.addEventListener('mouseenter', () => {
                    overlay.style.opacity = '1';
                });
                
                card.addEventListener('mouseleave', () => {
                    overlay.style.opacity = '0.9';
                });
            }
        });
    }

});