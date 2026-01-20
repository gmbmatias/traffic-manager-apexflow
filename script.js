document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const closeMenuBtn = document.querySelector('.close-menu-btn');
    const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
    const mobileLinks = document.querySelectorAll('.mobile-nav a');

    function toggleMenu() {
        mobileMenuOverlay.classList.toggle('active');
        document.body.style.overflow = mobileMenuOverlay.classList.contains('active') ? 'hidden' : '';
    }

    mobileMenuBtn.addEventListener('click', toggleMenu);
    closeMenuBtn.addEventListener('click', toggleMenu);

    mobileLinks.forEach(link => {
        link.addEventListener('click', toggleMenu);
    });

    // Close menu when clicking outside
    mobileMenuOverlay.addEventListener('click', (e) => {
        if (e.target === mobileMenuOverlay) {
            toggleMenu();
        }
    });

    // Header Scroll Effect - Dark Theme
    const header = document.querySelector('header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.5)';
            header.style.backgroundColor = 'rgba(13, 13, 13, 0.98)';
        } else {
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.5)';
            header.style.backgroundColor = '#0d0d0d';
        }
    });

    // Scroll Animations (Intersection Observer)
    const fadeElements = document.querySelectorAll('.fade-in, .fade-in-up');

    // Reset animations initially
    fadeElements.forEach(el => {
        el.style.animationPlayState = 'paused';
    });

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    fadeElements.forEach(el => {
        observer.observe(el);
    });

    // Form Submission
    const contactForm = document.querySelector('.contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Simulate sending
            const btn = contactForm.querySelector('button[type="submit"]');
            const originalText = btn.innerText;

            btn.innerText = 'Enviando...';
            btn.disabled = true;

            setTimeout(() => {
                alert('Obrigado! Sua solicitação foi recebida. Entrarei em contato em breve.');
                contactForm.reset();
                btn.innerText = originalText;
                btn.disabled = false;
            }, 1500);
        });
    }
});
