import { BaseComponent } from '../../abstract/basecomponent';

export class Anchor extends BaseComponent {

  constructor(classes: string[] = [], anchorLink: string, anchorDescription: string) {
    super('a', [...classes]);

    (<HTMLAnchorElement>this.component).href = `${anchorLink}`;
    this.component.textContent = `${anchorDescription}`;
  }
}