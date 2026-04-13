const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');

// This checks that the menu exists before trying to use it.

if (menuToggle && siteNav) {
  // If the menu is open, this closes it. If it is closed, this opens it.
  menuToggle.addEventListener('click', () => {
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Open site navigation' : 'Close site navigation');
    siteNav.dataset.open = String(!isOpen);
  });

  // On mobile, the menu closes after someone clicks a link.
  siteNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      if (window.innerWidth < 769) {
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.setAttribute('aria-label', 'Open site navigation');
        siteNav.dataset.open = 'false';
      }
    });
  });

  // If the screen gets bigger, the mobile menu state gets reset.
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 769) {
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', 'Open site navigation');
      siteNav.dataset.open = 'false';
    }
  });
}

// This checks if the user asked for less motion in their system settings.
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const revealElements = document.querySelectorAll('.reveal');

// This makes sections fade in when they scroll into view.
if (!prefersReducedMotion && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Once the item is visible, I stop watching it so the browser does less work.
        entry.target.classList.add('is-visible');
        currentObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  revealElements.forEach((element) => observer.observe(element));
} else {
  // If motion is reduced or the browser is older, everything just shows normally.
  revealElements.forEach((element) => element.classList.add('is-visible'));
}
