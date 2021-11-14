import { BaseComponent } from '../abstract/basecomponent';

class Button extends BaseComponent {

  constructor(classes: string[] = [], text: string) {
    super('button', ['button', ...classes]);
    this.component.textContent = text;
  }
}

export class WelcomeButton extends Button {

  constructor(text: string) {
    super(['button_transparent'], text);
  }
}

export class NavigateButton extends Button {
  readonly icon: string;

  constructor(text: string, icon: string) {
    super(['button__navigate'], text);
    this.icon = icon;
  }
}

export class QuizButton extends Button {

  constructor(text: string) {
    super(['button__quiz'], text);
  }
}
