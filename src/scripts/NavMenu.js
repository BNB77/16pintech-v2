export class NavMenu {
  constructor() {
    this.burger = document.querySelector('.burger');
    this.navList = document.querySelector('.nav__list');
    this.navLinks = document.querySelectorAll('.nav__link');

    this.#bindEvents();
    this.#initSmoothScroll();
    this.#initActiveLink();
  }

  #bindEvents() {
    if (!this.burger) return;

    this.burger.addEventListener('click', () => this.#toggleMenu());

    document.addEventListener('click', (e) => {
      if (!e.target.closest('.nav')) {
        this.#closeMenu();
      }
    });
  }

  #toggleMenu() {
    const isOpen = this.navList.classList.toggle('nav__list--open');
    this.burger.setAttribute('aria-expanded', String(isOpen));
  }

  #closeMenu() {
    this.navList.classList.remove('nav__list--open');
    this.burger?.setAttribute('aria-expanded', 'false');
  }

  #initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', (e) => {
        const href = anchor.getAttribute('href');
        if (href === '#') return;
        const target = document.querySelector(href);
        if (!target) return;
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        this.#closeMenu();
      });
    });
  }

  #initActiveLink() {
    const sections = document.querySelectorAll('section[id]');
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const id = entry.target.getAttribute('id');
          this.navLinks.forEach((link) => {
            const isActive = link.getAttribute('href') === `#${id}`;
            link.classList.toggle('nav__link--active', isActive);
          });
        });
      },
      { threshold: 0.4 }
    );

    sections.forEach((section) => observer.observe(section));
  }
}
