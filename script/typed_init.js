// ======== typed.js integration =========
// Include this in your script folder as 'typed_init.js'

import Typed from 'https://cdn.jsdelivr.net/npm/typed.js@2.0.12';

document.addEventListener('DOMContentLoaded', () => {
  const target = document.getElementById('typed-intro');
  if (target) {
    new Typed('#typed-intro', {
      strings: [
        "Thibaut G. Morillon",
        "Professor of Finance",
        "Fintech | AI | Real Estate"
      ],
      typeSpeed: 60,
      backSpeed: 30,
      loop: true,
      backDelay: 1500,
      showCursor: true,
      cursorChar: "|")
    });
  }
});
