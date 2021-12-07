import { BaseComponent } from '../../abstract/basecomponent';

export class Toggle extends BaseComponent {
  readonly toggleElement: HTMLInputElement;
  readonly labelElement: HTMLElement;

  constructor(classes: string[] = [], textDescription: string, id: string) {
    super('div', [...classes]);

    this.labelElement = document.createElement('div');
    this.labelElement.classList.add('text-description');
    this.labelElement.textContent = textDescription;

    const div = document.createElement('div');
    div.classList.add('switch-box');
    div.classList.add('color');

    this.toggleElement = document.createElement('input');
    this.toggleElement.classList.add('switch-box-input');
    this.toggleElement.setAttribute('type', 'checkbox');
    this.toggleElement.setAttribute('id', id);

    const labelInnerLeft = document.createElement('label');
    labelInnerLeft.setAttribute('for', id);
    labelInnerLeft.classList.add('switch-box-label');
    labelInnerLeft.textContent = 'Off';

    const labelInnerRight = document.createElement('label');
    labelInnerRight.setAttribute('for', id);
    labelInnerRight.classList.add('switch-box-label');
    labelInnerRight.textContent = 'On';

    const labelInner = document.createElement('label');
    labelInner.setAttribute('for', id);
    labelInner.classList.add('switch-box-slider');
    
    this.component.append(
      this.labelElement,
      div
    );

    div.append (
      this.toggleElement,
      labelInnerLeft,
      labelInner,
      labelInnerRight
    );

  }

}
