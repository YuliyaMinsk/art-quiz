import { Button } from "./button";

export class BigButton extends Button {

  constructor(text: string, classes: string[] = []) {
    super(['button-transparent', ...classes], text);
  }
}
