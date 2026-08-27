/**
 * Unified IntersectionObserver utilities for performance optimization
 * Consolidates common observer patterns used across the application
 */

class ObserverManager {
    constructor() {
        this.observers = new Map();
    }

    /**
     * Generic observer for fade-in animations
     */
    observeFadeIn(elements, options = {}) {
        const config = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px',
            ...options
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add('visible');
                    }, options.delay || index * 100);
                    observer.unobserve(entry.target);
                }
            });
        }, config);

        elements.forEach(el => observer.observe(el));
        return observer;
    }

    /**
     * Clean up all observers
     */
    cleanup() {
        this.observers.forEach(observer => observer.disconnect());
        this.observers.clear();
    }
}

// Singleton instance
export const observerManager = new ObserverManager();

// Convenience functions
export const observeFadeIn = (elements, options) => observerManager.observeFadeIn(elements, options);
