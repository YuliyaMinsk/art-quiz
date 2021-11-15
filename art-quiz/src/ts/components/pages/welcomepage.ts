import { Page } from './page';
import { WelcomeButton } from '../buttons/welcomebutton';

export class WelcomePage extends Page {
  readonly artistsButton: WelcomeButton;
  readonly picturesButton: WelcomeButton;
  readonly settingsButton: WelcomeButton;

  constructor(readonly rootElement: HTMLElement) {
    super(rootElement);

    this.artistsButton = new WelcomeButton('Художники');
    this.main.component.appendChild(this.artistsButton.component);

    this.picturesButton = new WelcomeButton('Картины');
    this.main.component.appendChild(this.picturesButton.component);

    this.settingsButton = new WelcomeButton('Настройки');
    this.main.component.appendChild(this.settingsButton.component);
  }
}