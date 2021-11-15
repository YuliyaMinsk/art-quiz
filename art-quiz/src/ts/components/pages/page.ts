import { Header } from '../elements/header';
import { Main } from '../elements/main';
import { Footer } from '../elements/footer';

export class Page {  
  private readonly header: Header;
  private readonly main: Main;
  private readonly footer: Footer;

  constructor(readonly rootElement: HTMLElement) {
    this.header = new Header();
    this.main = new Main();
    this.footer = new Footer();
    this.rootElement.append(this.header.component, this.main.component, this.footer.component);
  }
}