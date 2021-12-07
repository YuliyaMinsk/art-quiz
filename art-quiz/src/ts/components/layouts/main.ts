import { PageComponent } from "../../abstract/pagecomponent";

export class Main extends PageComponent {

  constructor(classes: string[] = []) {
    super('main', ['main', ...classes]);
  }
  
}
