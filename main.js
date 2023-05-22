// Get the current URL
const currentURL = window.location.href;

// Get all navigation links
const navLinks = document.querySelectorAll('nav a');

// Loop through each navigation link
navLinks.forEach(link => {
    // Check if the link's href matches the current URL
    if (link.href === currentURL) {
        // Add the "transparent" class to the link
        link.classList.add('transparent');
    }
});
