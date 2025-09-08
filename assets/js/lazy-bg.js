/* assets/js/lazy-bg.js */
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(en => {
      if (en.isIntersecting) {
        const el = en.target;
        el.style.backgroundImage = `url(${el.dataset.bg})`;
        io.unobserve(el);
      }
    });
  }, { rootMargin: '50px' });

  document.querySelectorAll('[data-bg]').forEach(el => io.observe(el));
}