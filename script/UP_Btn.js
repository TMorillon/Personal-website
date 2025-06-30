  document.addEventListener('DOMContentLoaded', () => {
    const scrollTopBtn = document.getElementById('scrollTopBtn');

    window.addEventListener('scroll', () => {
      const scrollPosition = window.scrollY || document.documentElement.scrollTop;
      const pageHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollThreshold = 100;

      if (scrollPosition > scrollThreshold) {
        scrollTopBtn.style.display = 'block';
      } else {
        scrollTopBtn.style.display = 'none';
      }
    });

    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  });
