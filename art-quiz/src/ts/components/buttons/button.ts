import { BaseComponent } from '../../abstract/basecomponent';

export class Button extends BaseComponent {

  constructor(classes: string[] = [], text: string) {
    super('button', ['button', ...classes]);
    this.component.textContent = text;
  }
}
