import { Page } from './page';
import { Image } from '../elements/image';
import { NavigateButton } from '../buttons/navigatebutton';
import { Constants } from '../../abstract/constants';

export class CategoryPage extends Page {
  readonly logo: Image;
  readonly backMenu: NavigateButton;

  constructor() {
    super();

    this.logo = new Image(['logo', 'logo-navigate']);
    this.backMenu = new NavigateButton(Constants.NAV_BUTTON_CATEGORY, ['icon-back']);
  }

  addComponents() {
    this.removeComponents();    
    this.header.component.append(
      this.logo.component, 
      this.backMenu.component
    );
  }

}