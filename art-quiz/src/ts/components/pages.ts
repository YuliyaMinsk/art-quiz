import { BaseComponent } from '../abstract/basecomponent';
import { Constants } from '../abstract/constants';
import { Image } from './image';

class PageComponent extends BaseComponent {

  // createImage = (src: string) => new Promise<HTMLImageElement>((res, rej) => {
  //   const img = new Image();
  //   img.onload = () => res(img);
  //   img.onerror = rej;
  //   img.src = src;
  // });
}

export class Header extends PageComponent {
  readonly logo: Image;

  constructor() {
    super('header', ['header']);
    this.logo = new Image(['logo'], 'images/art-quiz-logo.svg', 'логотип игры');
    this.component.appendChild(this.logo.component);
  }
  
}

export class Main extends PageComponent {

  constructor() {
    super('main', ['main']);
  }
  
}

export class Footer extends PageComponent {

  constructor() {
    super('footer', ['footer']);
  }
  
}