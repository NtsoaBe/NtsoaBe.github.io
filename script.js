document.addEventListener('DOMContentLoaded', () => {
    // Select the hamburger menu and the navigation links container
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    // Toggle the 'active' class to show/hide the menu on mobile
    mobileMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});
