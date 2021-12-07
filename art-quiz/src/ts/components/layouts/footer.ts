import { BaseComponent } from "../../abstract/basecomponent";
import { PageComponent } from "../../abstract/pagecomponent";

export class Footer extends PageComponent {
  readonly container: HTMLElement;
  readonly year: HTMLElement;
  readonly rsUrl: HTMLAnchorElement;
  readonly githubUrl: HTMLAnchorElement;

  constructor() {
    super('footer', ['footer']);

    this.container = document.createElement('div')
    this.container.classList.add('_container');
    this.container.classList.add('footer-container');
    
    this.rsUrl = document.createElement('a');
    this.rsUrl.setAttribute('href', 'https://rs.school/index.html');
    this.rsUrl.textContent = 'The Rolling Scopes School';


    this.year = document.createElement('span')
    this.year.textContent = '2021';

    this.githubUrl = document.createElement('a');
    this.githubUrl.setAttribute('href', 'https://github.com/YuliyaMinsk');
    this.githubUrl.textContent = 'Yuliya Niaverava';

    this.component.append(this.container);

    this.container.append(
      this.rsUrl,
      this.year,
      this.githubUrl
      );
  }  
}
