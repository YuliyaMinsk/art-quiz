import { BaseComponent } from '../../abstract/basecomponent';

export class Counter extends BaseComponent {
  readonly minusButton: HTMLButtonElement;
  readonly plusButton: HTMLButtonElement;
  readonly counterElement: HTMLInputElement;
  readonly labelElement: HTMLElement;
  
  constructor(classes: string[] = [], textDescription: string, id: string) {
    super('div', [...classes]);

    this.labelElement = document.createElement('div');
    this.labelElement.classList.add('text-description');
    this.labelElement.textContent = textDescription;

    const div = document.createElement('div');
    div.classList.add('counter-box');

    this.counterElement = document.createElement('input');
    this.counterElement.classList.add('counter-input');
    this.counterElement.readOnly = true;
    const propertiesCounterElement = [
      ['type', 'number'], 
      ['min', '0'],
      ['max', '30'],
      ['step', '5'],
      ['value', '0'],
      ['id', id]
    ];
    propertiesCounterElement.forEach(([property, value]) => this.counterElement.setAttribute(property, value));

    this.minusButton = document.createElement('button');
    this.minusButton.classList.add('counter-button');
    this.minusButton.textContent = '-';

    this.plusButton = document.createElement('button');
    this.plusButton.classList.add('counter-button');
    this.plusButton.textContent = '+';

    this.component.append(
      this.labelElement,
      div
    );

    div.append (
      this.minusButton,
      this.counterElement,
      this.plusButton
    );
  }
}
