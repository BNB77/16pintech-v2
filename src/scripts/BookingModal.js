export class BookingModal {
  #modal;
  #form;
  #successEl;
  #overlay;

  constructor(modalId) {
    this.#modal = document.getElementById(modalId);
    if (!this.#modal) return;

    this.#form = this.#modal.querySelector('.modal__form');
    this.#successEl = this.#modal.querySelector('.modal__success');
    this.#overlay = this.#modal.querySelector('.modal__overlay');

    this.#bindEvents();
  }

  open() {
    this.#modal.classList.add('modal--open');
    document.body.classList.add('scroll-lock');
    this.#modal.querySelector('.modal__close').focus();
  }

  close() {
    this.#modal.classList.remove('modal--open');
    document.body.classList.remove('scroll-lock');
    this.#reset();
  }

  #reset() {
    if (this.#form) this.#form.reset();
    if (this.#successEl) this.#successEl.hidden = true;
    if (this.#form) this.#form.hidden = false;
  }

  #bindEvents() {
    this.#modal.querySelector('.modal__close').addEventListener('click', () => this.close());
    this.#overlay.addEventListener('click', () => this.close());

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.#modal.classList.contains('modal--open')) {
        this.close();
      }
    });

    if (this.#form) {
      this.#form.addEventListener('submit', (e) => this.#handleSubmit(e));
    }
  }

  #handleSubmit(e) {
    e.preventDefault();
    this.#form.hidden = true;
    this.#successEl.hidden = false;
  }
}
