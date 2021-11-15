import { Button } from "./button";

export class NavigateButton extends Button {
  readonly icon: string;

  constructor(text: string, icon: string) {
    super(['button__navigate'], text);
    this.icon = icon;
  }
}