export class BaseComponent {
  readonly component: HTMLElement;

  constructor(tagName: keyof HTMLElementTagNameMap = 'div', classes: string[] = []) {
    this.component = document.createElement(tagName);
    if (classes) {
      this.component.classList.add(...classes);
    }
  }
}
