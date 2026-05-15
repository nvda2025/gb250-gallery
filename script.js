/**
 * GB250 Clubman Gallery - Interactions
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // --- Scroll Reveal Animation ---
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                revealObserver.unobserve(entry.target); // Once revealed, stop observing
            }
        });
    }, {
        threshold: 0.1
    });
    
    revealElements.forEach(el => revealObserver.observe(el));


    // --- Image Modal Functionality ---
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const galleryItems = document.querySelectorAll('.gallery-item img');
    const closeModal = document.querySelector('.close-modal');

    galleryItems.forEach(item => {
        item.addEventListener('click', (e) => {
            modal.style.display = 'flex';
            modalImg.src = e.target.src;
            // Prevent body scroll
            document.body.style.overflow = 'hidden';
        });
    });

    const hideModal = () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    };

    closeModal.addEventListener('click', hideModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) hideModal();
    });

    // Close modal on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') hideModal();
    });


    // --- Subtle Parallax for Hero ---
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        // Slow down the background movement
        hero.style.backgroundPositionY = scrolled * 0.5 + 'px';
    });

});
