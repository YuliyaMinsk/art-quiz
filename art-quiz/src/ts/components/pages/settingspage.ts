import { Page } from './page';
import { NavigateButton } from '../buttons/navigatebutton';
import { Image } from '../elements/image';
import { Range } from '../elements/range';
import { Toggle } from '../elements/toggle';
import { Constants } from '../../abstract/constants';

export class SettingsPage extends Page {
  readonly logo: Image;
  readonly backMenu: NavigateButton;
  // readonly closeMenu: NavigateButton;
  readonly volume: Range;
  readonly toggle: Toggle;

  constructor() {
    super();

    this.logo = new Image(['logo', 'logo-navigate']);
    this.backMenu = new NavigateButton(Constants.NAV_BUTTON_SETTINGS, ['icon-back']);
    // this.closeMenu = new NavigateButton('', ['icon-close']);

    this.volume = new Range(['range'], 0, 100, 'Громкость звука');
    this.toggle = new Toggle(['toggle'], 'Игра на время', 'time-game');
  }

  addComponents() {
    this.removeComponents();    
    this.header.component.append(
      this.logo.component, 
      this.backMenu.component
    );
    this.main.component.append(
      this.volume.component,
      this.toggle.component
    );
  }
}