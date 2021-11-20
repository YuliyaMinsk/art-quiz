import { Page } from './components/pages/page';
import { SettingsPage } from './components/pages/settingspage';
import { WelcomePage } from './components/pages/welcomepage';
import { CategoryPage } from './components/pages/categorypage';
import { Router } from './router';

import { Constants } from './abstract/constants';
import { picturesType } from './abstract/types';
import { picturesData } from './data/pictures';

export class Controller {
  private readonly welcomePage: Page; 
  private readonly settingsPage: Page;
  private readonly categoryArtistPage: Page;
  private readonly categoryPicturePage: Page;
  readonly router: Router;

  constructor(private readonly rootElement: HTMLElement) {
    this.welcomePage = new WelcomePage();
    this.settingsPage = new SettingsPage();
    this.categoryArtistPage = new CategoryPage('Artists', 1);
    this.categoryPicturePage = new CategoryPage('Pictures', 121);
    this.router = new Router();    
  }
  
  start() {
    this.router.addNewRoute('/', 'Home');
    this.router.addNewRoute('/#settings', 'Settings');
    this.router.addNewRoute('/#artists', 'CategoryArtist');
    this.router.addNewRoute('/#pictures', 'CategoryPicture');
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
        case 'CategoryArtist': 
          const categoryArtistData = this.loadDataCategoryArtist();
          this.categoryArtistPage.showPage(this.rootElement); 
          console.log('categoryArtistData: ', categoryArtistData);
          (<CategoryPage>this.categoryArtistPage).addComponents(this.everyNth(categoryArtistData, 10)); 
          this.initCategoryArtistButtons();
          console.log('show Category Artist page'); 
          break;
        case 'CategoryPicture': 
          const categoryPictureData = this.loadDataPictureArtist();
          this.categoryPicturePage.showPage(this.rootElement); 
          (<CategoryPage>this.categoryPicturePage).addComponents(this.everyNth(categoryPictureData, 10)); 
          this.initCategoryPictureButtons();
          console.log('show Category Picture page'); 
          break;
        // case 'Quiz': this.quizPage.showPage(this.rootElement); break;
        // case 'Results': this.resultsPage.showPage(this.rootElement); break;
        // default: this.er404Page.showPage(this.rootElement); break;
      }
    })
  }

  initWelcomeButtons() {
    (<WelcomePage>this.welcomePage).artistsButton.component.addEventListener('click', () => {      
      window.location.href = '/#artists'
    });
    (<WelcomePage>this.welcomePage).picturesButton.component.addEventListener('click', () => {
      window.location.href = '/#pictures'
    });
    (<WelcomePage>this.welcomePage).settingsButton.component.addEventListener('click', () => {
      window.location.href = '/#settings'
    });
  }

  initSettingsButtons() {
    (<SettingsPage>this.settingsPage).backMenu.component.addEventListener('click', () => {    
      window.location.href = '/'
    });
    (<SettingsPage>this.settingsPage).volume.rangeElement.addEventListener('input', () => {
      (<SettingsPage>this.settingsPage).volume.changeRange();      
    });
    (<SettingsPage>this.settingsPage).counter.minusButton.addEventListener('click', () => {
      (<SettingsPage>this.settingsPage).counter.inputField.stepDown()      
    });
    (<SettingsPage>this.settingsPage).counter.plusButton.addEventListener('click', () => {
      (<SettingsPage>this.settingsPage).counter.inputField.stepUp()      
    });
  }

  initCategoryArtistButtons() {
    (<CategoryPage>this.categoryArtistPage).backMenu.component.addEventListener('click', () => {
      window.location.href = '/'
    });
  }

  loadDataCategoryArtist() {
    const categoryNumber = 1;
    const fromData = categoryNumber;
    const toData = fromData + (Constants.CATEGORY_ROUNDS * Constants.ROUND_QUESTIONS);

    return picturesData.slice(fromData, toData);
  }

  initCategoryPictureButtons() {
    (<CategoryPage>this.categoryPicturePage).backMenu.component.addEventListener('click', () => {
      window.location.href = '/'
    });
  }

  loadDataPictureArtist() {
    const categoryNumber = 121;
    const fromData = categoryNumber;
    const toData = fromData + (Constants.CATEGORY_ROUNDS * Constants.ROUND_QUESTIONS);

    return picturesData.slice(fromData, toData);
  }

  everyNth(array: picturesType[], n: number) {
    const result: picturesType[] = [];
    for (let i = 0; i < array.length; i += n) {
      if (array[i]) {
        result.push(array[i]);
      }
    }
    return result;
  }
}