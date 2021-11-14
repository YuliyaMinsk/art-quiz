import { BaseComponent } from '../abstract/basecomponent';

class Button extends BaseComponent {

  constructor(tagName: keyof HTMLElementTagNameMap = 'div', classes: string[] = []) {
    super(tagName, classes);
  }
}

export class WelcomeButton extends Button {

}

export class NavigateButton extends Button {

}

export class QuizButton extends Button {

}
