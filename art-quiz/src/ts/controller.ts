import { Header, Main, Footer } from './components/pages';
import { WelcomeButton, NavigateButton, QuizButton } from './components/buttons';

export class Controller {
  private readonly header: Header;
  private readonly main: Main;
  private readonly footer: Footer;

  constructor(private readonly rootElement: HTMLElement) {
    this.header = new Header();
    this.rootElement.appendChild(this.header.component);

    this.main = new Main();
    this.rootElement.appendChild(this.main.component);

    this.footer = new Footer();
    this.rootElement.appendChild(this.footer.component);
  }

//const welcomePage = new Page('div', ['root']);

// async function render() {
//   const subHeader = document.createElement('h2');
//   subHeader.innerHTML = 'This elements was created by js';
//   const logo = await createImage(image);
//   (<Element>logo).classList.add('logo');
//   document.body.appendChild(subHeader);
//   document.body.appendChild(logo);
// }

}