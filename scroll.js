// Select all anchor links with hashes
const navLinks = document.querySelectorAll('nav ul li a[href^="#"]');

navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default click behavior
        const targetID = this.getAttribute('href'); // Get the target section's ID
        const targetSection = document.querySelector(targetID); // Select the target section
        
        targetSection.scrollIntoView({
            behavior: 'smooth', // Enable smooth scrolling
            block: 'start' // Align the top of the section to the top of the viewport
        });
    });
});