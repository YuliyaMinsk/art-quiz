import { Page } from './page';
import { Image } from '../elements/image';
import { BigButton } from '../buttons/bigbutton';
import { Constants } from '../../abstract/constants';

export class WelcomePage extends Page {
  readonly logo: Image;
  readonly artistsButton: BigButton;
  readonly picturesButton: BigButton;
  readonly settingsButton: BigButton;

  constructor() {
    super(['header-welcome'], ['main-welcome']);

    this.logo = new Image(['logo']);
    this.artistsButton = new BigButton(Constants.WELCOME_BUTTON_FIRST_CATEGORY);
    this.picturesButton = new BigButton(Constants.WELCOME_BUTTON_SECOND_CATEGORY);
    this.settingsButton = new BigButton(Constants.WELCOME_BUTTON_SETTINGS);
  }

  addComponents() {
    this.removeComponents();
    this.header.component.append(
      this.logo.component
    );
    this.main.component.append(
      this.artistsButton.component,                              
      this.picturesButton.component, 
      this.settingsButton.component
    );
  }
}