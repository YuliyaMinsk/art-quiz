import { Button } from "./button";

export class WelcomeButton extends Button {

  constructor(text: string) {
    super(['button-transparent'], text);
  }
}