import { Page } from './page';
import { Image } from '../elements/image';
import { WelcomeButton } from '../buttons/welcomebutton';

export class WelcomePage extends Page {
  readonly logo: Image;
  readonly artistsButton: WelcomeButton;
  readonly picturesButton: WelcomeButton;
  readonly settingsButton: WelcomeButton;

  constructor(readonly rootElement: HTMLElement) {
    super(rootElement);

    this.logo = new Image(['logo'], 'images/art-quiz-logo.svg', 'логотип игры');
    this.header.component.appendChild(this.logo.component);

    this.artistsButton = new WelcomeButton('Художники');
    this.picturesButton = new WelcomeButton('Картины');
    this.settingsButton = new WelcomeButton('Настройки');
    this.main.component.append(this.artistsButton.component, 
                              this.picturesButton.component, 
                              this.settingsButton.component);
  }
}