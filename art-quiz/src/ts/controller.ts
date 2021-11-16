import { SettingsPage } from './components/pages/settingspage';
import { WelcomePage } from './components/pages/welcomepage';
import { Router } from './router';

export class Controller {
  private readonly welcomePage: WelcomePage;
  private readonly settingsPage: SettingsPage;
  readonly router: Router;

  constructor(private readonly rootElement: HTMLElement) {
    this.welcomePage = new WelcomePage(rootElement);
    this.settingsPage = new SettingsPage(rootElement);

    this.router = new Router();
    this.router.addNewRoute('/', 'Home', function(req) {
      console.log('Home: ' + req.path);
      //return req.page;
    });
    this.router.addNewRoute('/#settings', 'Settings', function(req) {
      console.log('Settings: ' + req.path);
      //return req.page;
    });
  }

  start() {
    if (this.router) this.initRouter();
    if (this.welcomePage) {
      this.welcomePage.showPage();
      this.initWelcomeButtons(); 
    }

  }

  renderPage(currentPage: string) {

  }

  initRouter() {
    window.addEventListener('hashchange', () => {
      console.log('hash: ' + window.location.hash);
      this.router.init();
    })
  }

  initWelcomeButtons() {
    this.welcomePage.artistsButton.component.addEventListener('click', () => {
      console.log('click on Artist button');      
      window.location.href = '/#category'
    });
    this.welcomePage.picturesButton.component.addEventListener('click', () => {
      console.log('click on Picture button');
      window.location.href = '/#category'
    });
    this.welcomePage.settingsButton.component.addEventListener('click', () => {
      console.log('click on Settings button');
      window.location.href = '/#settings'
    });
  }
}