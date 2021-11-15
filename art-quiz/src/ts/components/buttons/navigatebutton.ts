import { Button } from "./button";
import { Image } from '../elements/image';

export class NavigateButton extends Button {
  readonly iconNavigate: Image;

  constructor(text: string, iconLink: string, iconDescription: string) {
    super(['button-navigate'], text);

    this.iconNavigate = new Image(['icon', 'icon-back'], iconLink, iconDescription);
    this.component.prepend(this.iconNavigate.component);
  }
}