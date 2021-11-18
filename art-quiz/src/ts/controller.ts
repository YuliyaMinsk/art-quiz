import { Page } from './components/pages/page';
import { SettingsPage } from './components/pages/settingspage';
import { WelcomePage } from './components/pages/welcomepage';
import { CategoryPage } from './components/pages/categorypage';
import { Router } from './router';

export class Controller {
  private readonly welcomePage: Page; 
  private readonly settingsPage: Page;
  private readonly categoryPage: Page;
  readonly router: Router;

  constructor(private readonly rootElement: HTMLElement) {
    this.welcomePage = new WelcomePage();
    this.settingsPage = new SettingsPage();
    this.categoryPage = new CategoryPage();
    this.router = new Router();    
  }
  
  start() {
    this.router.addNewRoute('/', 'Home');
    this.router.addNewRoute('/#settings', 'Settings');
    this.router.addNewRoute('/#category', 'Category');
    this.router.addNewRoute('/#quiz', 'Quiz');
    this.router.addNewRoute('/#results', 'Results');
    this.initRouter();

    if (this.welcomePage) {
      this.welcomePage.showPage(this.rootElement);
      (<WelcomePage>this.welcomePage).addComponents();
      this.initWelcomeButtons(); 
    }
  }

   initRouter() {
    window.addEventListener('hashchange', () => {
      // console.log('hash: ' + window.location.hash);
      let currentPage = this.router.getPage('/' + window.location.hash);

      switch (currentPage[0].page) {
        case 'Home': 
          this.welcomePage.showPage(this.rootElement);  
          (<WelcomePage>this.welcomePage).addComponents();  
          console.log('show Home page'); 
          break;
        case 'Settings': 
          this.settingsPage.showPage(this.rootElement); 
          (<SettingsPage>this.settingsPage).addComponents();  
          this.initSettingsButtons(); 
          console.log('show Settings page'); 
          break;
        case 'Category': 
          this.categoryPage.showPage(this.rootElement); 
          (<CategoryPage>this.categoryPage).addComponents(); 
          this.initCategoryButtons();
          console.log('show Category page'); 
          break;
        // case 'Quiz': this.quizPage.showPage(this.rootElement); break;
        // case 'Results': this.resultsPage.showPage(this.rootElement); break;
        // default: this.er404Page.showPage(this.rootElement); break;
      }
    })
  }

  initWelcomeButtons() {
    (<WelcomePage>this.welcomePage).artistsButton.component.addEventListener('click', () => {
      console.log('click on Artist button');      
      window.location.href = '/#category'
    });
    (<WelcomePage>this.welcomePage).picturesButton.component.addEventListener('click', () => {
      console.log('click on Picture button');
      window.location.href = '/#category'
    });
    (<WelcomePage>this.welcomePage).settingsButton.component.addEventListener('click', () => {
      console.log('click on Settings button');
      window.location.href = '/#settings'
    });
  }

  initSettingsButtons() {
    (<SettingsPage>this.settingsPage).backMenu.component.addEventListener('click', () => {
      console.log('click on backMenu button');      
      window.location.href = '/'
    });
    (<SettingsPage>this.settingsPage).volume.rangeElement.addEventListener('input', () => {
      console.log('change range');  
      (<SettingsPage>this.settingsPage).volume.changeRange();      
    });
  }

  initCategoryButtons() {
    (<CategoryPage>this.categoryPage).backMenu.component.addEventListener('click', () => {
      console.log('click on backMenu button');      
      window.location.href = '/'
    });
  }
}