import { Page } from './page';
import { WelcomeButton } from '../buttons/welcomebutton';

export class WelcomePage extends Page {

  constructor(readonly rootElement: HTMLElement) {
    super(rootElement);
  }
}