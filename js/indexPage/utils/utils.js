/* js/utils.js */

// Throttle: Evita que o navegador processe o scroll milhares de vezes por segundo
export const throttle = (func, limit) => {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
};




// Preloader: Garante que o site só apareça quando tudo estiver pronto
export function initPreloader() {
    window.addEventListener('load', () => {
        document.body.classList.add('loaded');
    });
}