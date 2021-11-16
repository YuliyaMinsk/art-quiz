import { Button } from "./button";
import { Image } from '../elements/image';

export class NavigateButton extends Button {
  readonly iconNavigate: Image;

  constructor(text: string, classes: string[] = []) {
    super(['button-navigate', ...classes], text);

    this.iconNavigate = new Image(['icon']);
    this.component.prepend(this.iconNavigate.component);
  }
}