import { Header } from '../elements/header';
import { Main } from '../elements/main';
import { Footer } from '../elements/footer';

export class Page {  
  readonly header: Header;
  readonly main: Main;
  readonly footer: Footer;

  constructor(readonly rootElement: HTMLElement) {
    this.header = new Header();
    this.main = new Main();
    this.footer = new Footer();
    this.rootElement.append(this.header.component, this.main.component, this.footer.component);
  }
}