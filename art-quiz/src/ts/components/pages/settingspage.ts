import { Page } from './page';
import { Image } from '../elements/image';
// import { NavigateButton } from '../buttons/navigatebutton';
import { Anchor } from '../elements/anchor';

export class SettingsPage extends Page {
  readonly logo: Image;
  //readonly backMenu: Anchor;
  //readonly closeMenu: Anchor;

  constructor(readonly rootElement: HTMLElement) {
    super(rootElement);

    this.logo = new Image(['logo', 'logo-navigate']);
    //this.backMenu = new Anchor([], );
    // this.backMenu = new NavigateButton('Настройки', ['icon-back']);
    // this.closeMenu = new NavigateButton('', ['icon-close']);

  }

  showPage() {
    Page.prototype.clearPage();
    this.header.component.append(this.logo.component); /*, 
                                this.backMenu.component,
                                this.closeMenu.component);*/
  }
}