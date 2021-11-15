import { Button } from "./button";

export class QuizButton extends Button {

  constructor(text: string) {
    super(['button__quiz'], text);
  }
}