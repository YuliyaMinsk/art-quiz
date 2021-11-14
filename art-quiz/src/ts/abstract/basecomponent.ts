export class BaseComponent {
  readonly name: HTMLElement;

  constructor(tagName: keyof HTMLElementTagNameMap = 'div', classes: string[] = []) {
    this.name = document.createElement(tagName);
    this.name.classList.add(...classes);
  }
}