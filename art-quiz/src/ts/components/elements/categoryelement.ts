import { BaseComponent } from '../../abstract/basecomponent';

export class CategoryElement extends BaseComponent {
  roundText: HTMLElement;
  numberCompletedText: HTMLElement;
  roundButton: HTMLButtonElement;
  roundCategoryNumber: string;
  isCategoryCompleted: boolean;

  constructor(classes: string[] = []) {
    super('div', ['category-element', ...classes]);

    const div = document.createElement('div');
    div.classList.add('round-box');

    this.roundText = document.createElement('span');
    this.roundText.classList.add('round-category');

    this.numberCompletedText = document.createElement('span');
    this.numberCompletedText.classList.add('number-category');

    this.roundButton = document.createElement('button');
    this.roundButton.classList.add('button-category');

    this.roundCategoryNumber = '0';
    this.isCategoryCompleted = false;

    this.component.append(
      div,
      this.roundButton
    );

    div.append (
      this.roundText,
      this.numberCompletedText
    );
  }
}
