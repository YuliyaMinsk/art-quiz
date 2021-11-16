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

    if (!this.rootElement.firstChild) {
      this.rootElement.append(this.header.component, this.main.component, this.footer.component);
    }
  }

  clearPage() {
    if (this.header) {
      while (this.header.component.firstChild) {
        this.header.component.removeChild(this.header.component.firstChild);
      }
    }
    if (this.main) {
      while (this.main.component.firstChild) {
        this.main.component.removeChild(this.main.component.firstChild);
      }
    }
    if (this.footer) {
      while (this.footer.component.firstChild) {
        this.footer.component.removeChild(this.footer.component.firstChild);
      }
    }
  }

}