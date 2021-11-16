import { BaseComponent } from '../../abstract/basecomponent';
import { Image } from '../elements/image';

export class Anchor extends BaseComponent {

  constructor(classes: string[] = [], anchorLink: string, anchorDescription: string) {
    super('a', [...classes]);

    (<HTMLAnchorElement>this.component).href = `${anchorLink}`;
    this.component.textContent = `${anchorDescription}`;
  }

  addImage = (classes: string[] = []) => {
    const icon = new Image(['icon', ...classes]);
    this.component.prepend(icon.component);
  }
}