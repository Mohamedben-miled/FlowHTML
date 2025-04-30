// JavaScript for Flow Coworking Space Landing Page

document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const menuIcon = mobileMenuToggle?.querySelector('i');
    
    mobileMenuToggle?.addEventListener('click', () => {
        navMenu?.classList.toggle('active');
        menuIcon?.classList.toggle('fa-bars');
        menuIcon?.classList.toggle('fa-times');
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navMenu?.contains(e.target) && !mobileMenuToggle?.contains(e.target) && navMenu?.classList.contains('active')) {
            navMenu.classList.remove('active');
            menuIcon?.classList.add('fa-bars');
            menuIcon?.classList.remove('fa-times');
        }
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu?.classList.remove('active');
            menuIcon?.classList.add('fa-bars');
            menuIcon?.classList.remove('fa-times');
        });
    });

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

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 100;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Shrink header on scroll
    const header = document.querySelector('header');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            header?.classList.add('scrolled');
            header.style.height = '70px';
        } else {
            header?.classList.remove('scrolled');
            header.style.height = '100px';
        }

        lastScroll = currentScroll;
    });
});