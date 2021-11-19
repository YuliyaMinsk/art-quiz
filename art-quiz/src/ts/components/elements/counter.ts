import { BaseComponent } from '../../abstract/basecomponent';

export class Counter extends BaseComponent {
  readonly minusButton: HTMLButtonElement;
  readonly plusButton: HTMLButtonElement;
  readonly inputField: HTMLInputElement;
  readonly labelElement: HTMLElement;
  
  constructor(classes: string[] = [], textDescription: string, id: string) {
    super('div', [...classes]);

    this.labelElement = document.createElement('div');
    this.labelElement.classList.add('text-description');
    this.labelElement.textContent = textDescription;

    const div = document.createElement('div');
    div.classList.add('counter-box');

    this.inputField = document.createElement('input');
    this.inputField.classList.add('counter-input');
    this.inputField.setAttribute('type', 'number');
    this.inputField.setAttribute('min', '0');
    this.inputField.setAttribute('max', '30');
    this.inputField.setAttribute('step', '5');
    this.inputField.setAttribute('value', '0');
    this.inputField.readOnly = true;
    this.inputField.setAttribute('id', id);

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
      this.inputField,
      this.plusButton
    );
  }
}