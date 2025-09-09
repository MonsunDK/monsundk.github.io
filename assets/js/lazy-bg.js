/* assets/js/lazy-bg.js */
document.querySelectorAll('[loading="lazy"]').forEach(element => {
    const loader = element.parentNode.querySelector('.loader-wrapper');
    const reveal = () => {
        element.style.opacity = 1;
        if (loader) {
            loader.classList.add('fade-out');  // CSS transitions loader out
        }
    };

    if (element.complete) {
        reveal();
    } else {
        element.addEventListener('load', reveal);
    }
});