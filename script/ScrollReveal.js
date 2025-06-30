document.addEventListener('DOMContentLoaded', () => {
  ScrollReveal().reveal('section', {
    distance: '40px',
    duration: 800,
    easing: 'ease-in-out',
    origin: 'bottom',
    interval: 200
  });

  ScrollReveal().reveal('#research-full', {
    distance: '60px',
    origin: 'bottom',
    duration: 1000,
    delay: 200,
    reset: false,
    easing: 'ease-in-out',
  });
});

ScrollReveal().reveal('hr', {
  beforeReveal: (el) => {
    el.classList.add('reveal');
  },
  distance: '0px',
  duration: 0
});
