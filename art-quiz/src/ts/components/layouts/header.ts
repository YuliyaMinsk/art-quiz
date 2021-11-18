import { PageComponent } from "../../abstract/pagecomponent";

export class Header extends PageComponent {

  constructor(classes: string[] = []) {
    super('header', ['header', ...classes]);
  }
  
}