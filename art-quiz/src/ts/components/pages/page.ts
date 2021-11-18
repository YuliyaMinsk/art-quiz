import { Header } from '../layouts/header';
import { Main } from '../layouts/main';
import { Footer } from '../layouts/footer';

export class Page {  
  readonly header: Header;
  readonly main: Main;
  readonly footer: Footer;

  constructor(headerClasses: string[] = [], mainClasses: string[] = []) {
    this.header = new Header(headerClasses);
    this.main = new Main(mainClasses);
    this.footer = new Footer();
  }

  showPage(rootElement) {
    if (rootElement.firstChild) this.clearPage(rootElement);
    rootElement.append(this.header.component, this.main.component, this.footer.component);
  }

  clearPage(rootElement) {
    if (rootElement) {
      while (rootElement.firstChild) {
        rootElement.removeChild(rootElement.firstChild);
      }
    }
  }

  removeComponents() {
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
  }
}