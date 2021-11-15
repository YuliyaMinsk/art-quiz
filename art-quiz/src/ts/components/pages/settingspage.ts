import { Page } from './page';
import { Image } from '../elements/image';
import { NavigateButton } from '../buttons/navigatebutton';

export class SettingsPage extends Page {
  readonly logo: Image;
  readonly backMenu: NavigateButton;
  readonly closeMenu: NavigateButton;

  constructor(readonly rootElement: HTMLElement) {
    super(rootElement);

    this.logo = new Image(['logo', 'logo-navigate'], 'images/art-quiz-logo.svg', 'логотип игры');
    this.backMenu = new NavigateButton('Настройки', '/icons/arrow-back.svg', 'стрелка назад')
    this.closeMenu = new NavigateButton('', '/icons/close.svg', 'закрыть настройки')
    this.header.component.append(this.logo.component, 
                                this.backMenu.component,
                                this.closeMenu.component);
  }
}