// script.js

// Show the progress bar on page load
NProgress.start();

// Complete the progress bar once the page is fully loaded
window.addEventListener('load', () => {
    NProgress.done();
});

// Optionally, show the progress bar on AJAX requests
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            NProgress.start();
        });
    });
});
