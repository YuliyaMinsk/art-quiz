import { Page } from './components/pages/page';
import { SettingsPage } from './components/pages/settingspage';
import { WelcomePage } from './components/pages/welcomepage';
import { CategoryPage } from './components/pages/categorypage';
import { QuizPage } from './components/pages/quizpage';
import { SettingsQuiz } from './data/settings';
import { Router } from './router';

import { Constants } from './abstract/constants';
import { PicturesType } from './abstract/types';
import { picturesData } from './data/pictures';
import { Sounds } from './data/sounds';
import { Results } from './data/resultsquiz';

export class Controller {
  private readonly welcomePage: Page; 
  private readonly settingsPage: Page;
  private readonly categoryArtistPage: Page;
  private readonly categoryPicturePage: Page;
  private readonly quizArtistPage: Page;
  private readonly quizPicturePage: Page;
  readonly router: Router;
  readonly settings: SettingsQuiz;

  results: Results;
  round: number = 0;
  question: number = 0;

  constructor(private readonly rootElement: HTMLElement) {
    this.router = new Router();  
    this.settings = new SettingsQuiz();
    this.welcomePage = new WelcomePage();
    this.settingsPage = new SettingsPage();
    this.initSettingsButtons(); 
    this.initSettingsValues();
    this.categoryArtistPage = new CategoryPage('Artists', 1);
    this.initCategoryArtistButtons();
    this.categoryPicturePage = new CategoryPage('Pictures', 121);
    this.initCategoryPictureButtons();
    this.quizArtistPage = new QuizPage('Artists');
    this.initQuizArtistButtons();
    this.quizPicturePage = new QuizPage('Pictures');
    this.setSoundsVolume();

    this.results = new Results();
  }
  
  start() {
    // this.settings.print(); // to DELETE
    this.rootElement.addEventListener('onunload', () => {   
      this.results.saveToLocalStorage();
    });

    this.router.createRouteMap();
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
          this.initSettingsValues();
          console.log('show Settings page'); 
          break;
        case 'CategoryArtist': 
          const categoryArtistData = this.loadDataCategoryArtist();
          this.categoryArtistPage.showPage(this.rootElement); 
          (<CategoryPage>this.categoryArtistPage).addComponents(this.everyNth(categoryArtistData, 10), this.results.resultArtistQuiz); 
          console.log('show Category Artist page'); 
          break;
        case 'CategoryPicture': 
          const categoryPictureData = this.loadDataPictureArtist();
          this.categoryPicturePage.showPage(this.rootElement); 
          (<CategoryPage>this.categoryPicturePage).addComponents(this.everyNth(categoryPictureData, 10), this.results.resultPaintingsQuiz); 
          console.log('show Category Picture page'); 
          break;
        case 'QuizArtist':           
          this.quizArtistPage.showPage(this.rootElement); 
          (<QuizPage>this.quizArtistPage).addComponents(); 
          console.log('show Quiz Artist page'); 
          break;
        // case 'QuizPicture': this.quizPage.showPage(this.rootElement); break;
        // case 'Results': this.resultsPage.showPage(this.rootElement); break;
        // default: this.er404Page.showPage(this.rootElement); break;
      }
    })
  }

  initWelcomeButtons() {    
    (<WelcomePage>this.welcomePage).artistsButton.component.addEventListener('click', () => {   
      if ((this.settings.isSound) && (this.settings.volume)) {
        Sounds.soundClick.play();
      }
      location.href = '#artists'
    });
    (<WelcomePage>this.welcomePage).picturesButton.component.addEventListener('click', () => {
      if ((this.settings.isSound) && (this.settings.volume)) {
        Sounds.soundClick.play();
      }
      location.href = '#pictures';
    });
    (<WelcomePage>this.welcomePage).settingsButton.component.addEventListener('click', () => {
      if ((this.settings.isSound) && (this.settings.volume)) {
        Sounds.soundClick.play();
      }
      location.href = '#settings'
    });
  }

  initSettingsButtons() {
    (<SettingsPage>this.settingsPage).backMenu.component.addEventListener('click', () => { 
      if ((this.settings.isSound) && (this.settings.volume)) {
        Sounds.soundClick.play();
      }  
      history.back(); 
    });
    (<SettingsPage>this.settingsPage).volume.rangeElement.addEventListener('change', () => {
      (<SettingsPage>this.settingsPage).volume.changeRange();      
    });
    (<SettingsPage>this.settingsPage).toggle.toggleElement.addEventListener('click', () => {
      if ((this.settings.isSound) && (this.settings.volume)) {
        Sounds.soundClick.play();
      }      
    });
    (<SettingsPage>this.settingsPage).counter.minusButton.addEventListener('click', () => {
      if ((this.settings.isSound) && (this.settings.volume)) {
        Sounds.soundClick.play();
      }
      (<SettingsPage>this.settingsPage).counter.counterElement.stepDown();  
    });
    (<SettingsPage>this.settingsPage).counter.plusButton.addEventListener('click', () => {
      if ((this.settings.isSound) && (this.settings.volume)) {
        Sounds.soundClick.play();
      }
      (<SettingsPage>this.settingsPage).counter.counterElement.stepUp();    
    });
    (<SettingsPage>this.settingsPage).saveButton.component.addEventListener('click', () => {   
      if ((this.settings.isSound) && (this.settings.volume)) {
        Sounds.soundClick.play();
      }
      
      this.settings.volume = Number((<SettingsPage>this.settingsPage).volume.rangeElement.value);
      if (this.settings.volume === 0) {
        this.settings.isSound = false;
      } else {
        this.settings.isSound = true;
      }
      this.settings.gameForTime = (<SettingsPage>this.settingsPage).toggle.toggleElement.checked;
      this.settings.timer = Number((<SettingsPage>this.settingsPage).counter.counterElement.value);      
      this.settings.saveToLocalStorage();
      this.setSoundsVolume();
    });
    (<SettingsPage>this.settingsPage).defaultButton.component.addEventListener('click', () => { 
      if ((this.settings.isSound) && (this.settings.volume)) {
        Sounds.soundClick.play();
      }
      this.settings.setToDefault();
      this.initSettingsValues();
      this.setSoundsVolume();
    });
  }

  initSettingsValues() {
    (<SettingsPage>this.settingsPage).volume.rangeElement.value = String(this.settings.volume);
    (<SettingsPage>this.settingsPage).volume.changeRange();
    if (this.settings.gameForTime) {
      (<SettingsPage>this.settingsPage).toggle.toggleElement.checked = true;
    } else {
      (<SettingsPage>this.settingsPage).toggle.toggleElement.checked = false;
    }
    (<SettingsPage>this.settingsPage).counter.counterElement.value = String(this.settings.timer);
  }


////////////// ARTISTS

  initCategoryArtistButtons() {
    (<CategoryPage>this.categoryArtistPage).backMenu.component.addEventListener('click', () => {
      if ((this.settings.isSound) && (this.settings.volume)) {
        Sounds.soundClick.play();
      }      
      location.href = '#'
    });
    (<CategoryPage>this.categoryArtistPage).main.component.addEventListener('click', (event) => {
      if ((event.target) && ((<Element>event.target).tagName != 'BUTTON')) return;
      if ((this.settings.isSound) && (this.settings.volume)) {
        Sounds.soundClick.play();
      }
      this.round = this.getNumberRound(Number((<Element>event.target).id));
      this.question = this.getNumberQuestion(Number((<Element>event.target).id));
      this.results.resultArtistQuiz[this.round].fill('null');
      this.loadDataQuizArtist(Number((<Element>event.target).id));
      location.href = '#artistsquiz'
    });
  }

  loadDataCategoryArtist() {
    const categoryNumber = 1;
    const fromData = categoryNumber;
    const toData = fromData + (Constants.CATEGORY_ROUNDS * Constants.ROUND_QUESTIONS);

    return picturesData.slice(fromData, toData);
  }

  loadDataQuizArtist(quizNumber: number) {
    const answers = this.generateFourRandomAnswers(picturesData[quizNumber].author);
    (<QuizPage>this.quizArtistPage).loadQuiz(picturesData[quizNumber], answers, this.results.resultArtistQuiz[this.round]);
  }


  initQuizArtistButtons() {
    (<QuizPage>this.quizArtistPage).backMenu.component.addEventListener('click', () => {
      if ((this.settings.isSound) && (this.settings.volume)) {
        Sounds.soundClick.play();
      }
      this.results.resultArtistQuiz[this.round].fill('null');
      (<CategoryPage>this.categoryArtistPage).roundButtons[this.round].isCategoryCompleted = false;
      (<CategoryPage>this.categoryArtistPage).roundButtons[this.round].roundButton.classList.add('disable');
      (<CategoryPage>this.categoryArtistPage).roundButtons[this.round].numberCompletedText.textContent = '';
      console.log('DONE?', (<CategoryPage>this.categoryArtistPage).roundButtons[this.round + 1].numberCompletedText.textContent);
      this.results.saveToLocalStorage();
      location.href = '#artists'
    });
    (<QuizPage>this.quizArtistPage).quizElement?.component.addEventListener('click', (event) => {
      const dataQuiz = (<QuizPage>this.quizArtistPage).quizElement?.dataQuiz;

      if ((this.settings.isSound) && (this.settings.volume)) {
        Sounds.soundClick.play();
      }
      if ((event.target) && ((<Element>event.target).tagName != 'BUTTON')) return;
      
      if ((<Element>event.target).textContent == (<QuizPage>this.quizArtistPage).quizElement?.dataQuiz?.author) {
          (<Element>event.target).classList.add('button-win');
          (<QuizPage>this.quizArtistPage).winModal.component.style.display = 'block';
          if (dataQuiz) {
            (<QuizPage>this.quizArtistPage).winModal.fillModalGame(dataQuiz);
          }
          this.results.resultArtistQuiz[this.round][this.question] = '1'; // ROUND WIN
          this.results.print(); // To DELETE
          if ((this.settings.isSound) && (this.settings.volume)) {
            Sounds.soundWin.play();
          }
        } else {
          (<Element>event.target).classList.add('button-lose');
          (<QuizPage>this.quizArtistPage).loseModal.component.style.display = 'block';
          if (dataQuiz) {
            (<QuizPage>this.quizArtistPage).loseModal.fillModalGame(dataQuiz);
          }
          this.results.resultArtistQuiz[this.round][this.question] = '0'; // ROUND LOSE
          this.results.print(); // To DELETE
          if ((this.settings.isSound) && (this.settings.volume)) {
            Sounds.soundLose.play();
          }
        }
    });
    (<QuizPage>this.quizArtistPage).winModal.nextButton.component.addEventListener('click', (event) => {
      this.question++;
      if (this.question == 10) {
        (<QuizPage>this.quizArtistPage).winModal.component.style.display = 'none';
        (<QuizPage>this.quizArtistPage).loseModal.component.style.display = 'none';
        (<QuizPage>this.quizArtistPage).endModal.component.style.display = 'block';
        (<QuizPage>this.quizArtistPage).endModal.fillModalEndTour(this.results.resultArtistQuiz[this.round]);
        (<CategoryPage>this.categoryArtistPage).roundButtons[this.round + 1].isCategoryCompleted = true;
        console.log('isCatCompl',this.round, (<CategoryPage>this.categoryArtistPage).roundButtons[this.round + 1].isCategoryCompleted);
        this.results.saveToLocalStorage();

        // should update category!!!

      } else {
        console.log(this.round, this.question, (this.round * 10) + (this.question + 1));
        this.loadDataQuizArtist((this.round * 10) + (this.question + 1));
        (<QuizPage>this.quizArtistPage).addComponents(); 
      }
    });
    (<QuizPage>this.quizArtistPage).loseModal.nextButton.component.addEventListener('click', (event) => {
      this.question++;
      if (this.question == 10) {
        if ((this.settings.isSound) && (this.settings.volume)) {
          Sounds.soundEndRound.play();
        }
        (<QuizPage>this.quizArtistPage).winModal.component.style.display = 'none';
        (<QuizPage>this.quizArtistPage).loseModal.component.style.display = 'none';
        (<QuizPage>this.quizArtistPage).endModal.component.style.display = 'block';
        (<QuizPage>this.quizArtistPage).endModal.fillModalEndTour(this.results.resultArtistQuiz[this.round]);
        (<CategoryPage>this.categoryArtistPage).roundButtons[this.round + 1].isCategoryCompleted = true;
        console.log('isCatCompl',this.round, (<CategoryPage>this.categoryArtistPage).roundButtons[this.round + 1].isCategoryCompleted);
        this.results.saveToLocalStorage();
      } else {
        console.log(this.round, this.question, (this.round * 10) + (this.question + 1));
        this.loadDataQuizArtist((this.round * 10) + (this.question + 1));
        (<QuizPage>this.quizArtistPage).addComponents(); 
      }
    });

    (<QuizPage>this.quizArtistPage).endModal.homeButton.component.addEventListener('click', () => {
      if ((this.settings.isSound) && (this.settings.volume)) {
        Sounds.soundClick.play();
      }
      (<QuizPage>this.quizArtistPage).endModal.component.style.display = 'none';      
      location.href = '#';
    });   
    (<QuizPage>this.quizArtistPage).endModal.categoryButton.component.addEventListener('click', () => {
      if ((this.settings.isSound) && (this.settings.volume)) {
        Sounds.soundClick.play();
      }      
      (<QuizPage>this.quizArtistPage).endModal.component.style.display = 'none'; 
      location.href = '#artists';
    });  


    (<QuizPage>this.quizArtistPage).winModal.close.addEventListener('click', () => { // to DELETE
      (<QuizPage>this.quizArtistPage).winModal.component.style.display = "none";
    });
    (<QuizPage>this.quizArtistPage).loseModal.close.addEventListener('click', () => { // to DELETE
      (<QuizPage>this.quizArtistPage).loseModal.component.style.display = "none";
    });
  }

////////////// PICTURES

  initCategoryPictureButtons() {
    (<CategoryPage>this.categoryPicturePage).backMenu.component.addEventListener('click', () => {
      if ((this.settings.isSound) && (this.settings.volume)) {
        Sounds.soundClick.play();
      }
      location.href = '#'
    });
  }

  loadDataPictureArtist() {
    const categoryNumber = 121;
    const fromData = categoryNumber;
    const toData = fromData + (Constants.CATEGORY_ROUNDS * Constants.ROUND_QUESTIONS);

    return picturesData.slice(fromData, toData);
  }

////////////// COMMON

  everyNth(array: PicturesType[], n: number) {
    const result: PicturesType[] = [];
    for (let i = 0; i < array.length; i += n) {
      if (array[i]) {
        result.push(array[i]);
      }
    }
    return result;
  }

  generateFourRandomAnswers(rightanswer: string) {
    const max: number = (Constants.CATEGORY_ROUNDS * Constants.ROUND_QUESTIONS);
    let answers: string[] = [];

    answers.push(rightanswer);
    while (answers.length < 4) {
      let randomNumber = Math.round(Math.random()*max);
      if (!answers.includes(picturesData[randomNumber].author)) {
        answers.push(picturesData[randomNumber].author);
      }
    }
    return this.shuffle(answers);
  }

  shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
  }

  getNumberRound(number: number) {
    if (number > 120) {
      number = number - 120;
    }    
    return Math.floor((number - 1) / 10);
  }

  getNumberQuestion(number: number) {
    return ((number % 10) - 1);
  }

  setSoundsVolume() {
    if (this.settings.volume) {
      Sounds.soundClick.volume = this.settings.volume / 100;
      Sounds.soundWin.volume = this.settings.volume / 100;
      Sounds.soundLose.volume = this.settings.volume / 100;
      Sounds.soundEndRound.volume = this.settings.volume / 100;
    }
  }
}
