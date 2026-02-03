


// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    
    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
    
    // Back to Top Button
    const backToTopButton = document.getElementById('backToTop');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });
    
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Animate skill bars on scroll
    const skillBars = document.querySelectorAll('.skill-level');
    
    const animateSkillBars = function() {
        skillBars.forEach(bar => {
            const level = bar.getAttribute('data-level');
            if (isElementInViewport(bar)) {
                bar.style.width = level + '%';
            }
        });
    };
    
    // Check if element is in viewport
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    
    // Animate elements on scroll
    const animatedElements = document.querySelectorAll('.fade-in');
    
    const animateOnScroll = function() {
        animatedElements.forEach(element => {
            if (isElementInViewport(element)) {
                element.classList.add('visible');
            }
        });
    };
    
    // Add fade-in class to elements
    const sections = document.querySelectorAll('section:not(#hero)');
    sections.forEach(section => {
        section.classList.add('fade-in');
    });
    
    // Initial animations
    animateSkillBars();
    animateOnScroll();
    
    // Listen for scroll events
    window.addEventListener('scroll', function() {
        animateSkillBars();
        animateOnScroll();
    });
    
    // Contact Form Submission
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');
        
        // In a real implementation, you would send this data to a server
        // For now, we'll just show a success message
        alert(`Thank you, ${name}! Your message has been sent successfully. I'll get back to you soon at ${email}.`);
        
        // Reset form
        contactForm.reset();
    });
    
    // Add hover effects to project cards
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Add typing effect to hero title (optional enhancement)
    const heroTitle = document.querySelector('.hero-title');
    const originalText = heroTitle.textContent;
    
    // If you want a typing effect, uncomment the code below
    /*
    let charIndex = 0;
    const typingSpeed = 50;
    
    function typeWriter() {
        if (charIndex < originalText.length) {
            heroTitle.textContent = originalText.substring(0, charIndex + 1);
            charIndex++;
            setTimeout(typeWriter, typingSpeed);
        }
    }
    
    // Start typing effect after a short delay
    setTimeout(typeWriter, 1000);
    */
    
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Initialize skill bars with 0 width
    skillBars.forEach(bar => {
        bar.style.width = '0%';
    });
    
    // Trigger initial animation after a short delay
    setTimeout(() => {
        animateSkillBars();
        animateOnScroll();
    }, 500);
});