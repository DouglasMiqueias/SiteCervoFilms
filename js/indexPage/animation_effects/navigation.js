export function initNavigation() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const header = document.querySelector('.header');

    // Menu Mobile
    navToggle?.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Header Scroll — show only after hero section
    const hero = document.querySelector('#hero');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        const heroBottom = hero ? hero.offsetTop + hero.offsetHeight : 600;

        if (currentScroll > heroBottom - 100) {
            // Past the hero — show navbar
            if (currentScroll < lastScroll || !header.classList.contains('visible')) {
                header.classList.add('visible');
                header.classList.remove('hidden');
            }
            // Hide on scroll down, show on scroll up
            if (currentScroll > lastScroll + 10 && currentScroll > heroBottom + 200) {
                header.classList.add('hidden');
                header.classList.remove('visible');
            }
        } else {
            // Still in hero — hide navbar
            header.classList.remove('visible');
            header.classList.add('hidden');
        }

        lastScroll = currentScroll;
    });

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Adicione esta função e a importe no seu main.js
export function initActiveNav(throttle) {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');

    const highlightNavigation = () => {
        const scrollY = window.pageYOffset;
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 150; // Ajuste para o header
            const sectionId = section.getAttribute('id');
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.toggle('active', link.getAttribute('href') === `#${sectionId}`);
                });
            }
        });
    };

    window.addEventListener('scroll', throttle(highlightNavigation, 100));
}