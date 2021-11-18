import { BaseComponent } from "../../abstract/basecomponent";
import { PageComponent } from "../../abstract/pagecomponent";
import { Anchor } from "../elements/anchor";

export class Footer extends PageComponent {
  readonly container: BaseComponent;
  readonly year: BaseComponent;
  readonly rsUrl: Anchor;
  readonly githubUrl: Anchor;

  constructor() {
    super('footer', ['footer']);

    this.container = new BaseComponent('div', ['_container', 'footer-container']);
    this.component.appendChild(this.container.component);
    
    this.rsUrl = new Anchor([],'https://rs.school/index.html', 'The Rolling Scopes School');
    this.container.component.appendChild(this.rsUrl.component);

    this.year = new BaseComponent('span');
    this.year.component.textContent = '2021';
    this.container.component.appendChild(this.year.component);

    this.githubUrl = new Anchor([], 'https://github.com/YuliyaMinsk', 'Yuliya Niaverava');
    this.container.component.appendChild(this.githubUrl.component);
  }  
}