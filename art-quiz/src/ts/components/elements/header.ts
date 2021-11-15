import { PageComponent } from "../../abstract/pagecomponent";
import { Image } from './image';

export class Header extends PageComponent {
  readonly logo: Image;

  constructor() {
    super('header', ['header']);
    this.logo = new Image(['logo'], 'images/art-quiz-logo.svg', 'логотип игры');
    this.component.appendChild(this.logo.component);
  }
  
}