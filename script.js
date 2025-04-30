// JavaScript for Flow Coworking Space Landing Page

document.addEventListener('DOMContentLoaded', () => {
    // Initialize shape animations
    const shapes = document.querySelectorAll('.section-shape');
    
    // Randomize initial positions slightly
    shapes.forEach(shape => {
        const randomX = (Math.random() - 0.5) * 20;
        const randomY = (Math.random() - 0.5) * 20;
        shape.style.transform = `translate(${randomX}px, ${randomY}px)`;
    });

    // Parallax effect for shapes on mouse move
    document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;

        shapes.forEach(shape => {
            const speed = shape.classList.contains('leaf-shape') ? 20 : 10;
            const offsetX = (mouseX - 0.5) * speed;
            const offsetY = (mouseY - 0.5) * speed;
            
            shape.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
        });
    });

    // Add floating animation to feature cards on scroll
    const cards = document.querySelectorAll('.feature-card, .price-card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.transform = 'translateY(0)';
                entry.target.style.opacity = '1';
            }
        });
    }, { threshold: 0.1 });

    cards.forEach(card => {
        card.style.transform = 'translateY(20px)';
        card.style.opacity = '0';
        card.style.transition = 'all 0.6s ease-out';
        observer.observe(card);
    });

    // Enhanced navbar interaction
    const navItems = document.querySelectorAll('.nav-item');
    const logo = document.querySelector('.logo');

    // Smooth hover effect for nav items
    navItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            navItems.forEach(other => {
                if (other !== item) {
                    other.style.opacity = '0.6';
                    other.style.transform = 'scale(0.95)';
                }
            });
        });

        item.addEventListener('mouseleave', () => {
            navItems.forEach(other => {
                other.style.opacity = '1';
                other.style.transform = 'scale(1)';
            });
        });
    });

    // Logo interaction
    if (logo) {
        logo.addEventListener('mouseenter', () => {
            const img = logo.querySelector('img');
            img.style.transform = 'scale(1.1) rotate(5deg)';
        });

        logo.addEventListener('mouseleave', () => {
            const img = logo.querySelector('img');
            img.style.transform = 'scale(1) rotate(0deg)';
        });
    }

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});