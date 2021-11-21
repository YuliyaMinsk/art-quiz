import { Page } from './page';
import { Image } from '../elements/image';
import { NavigateButton } from '../buttons/navigatebutton';
import { QuizElement } from '../elements/quizelement';
import { Constants } from '../../abstract/constants';
import { PicturesType, TypeQuiz } from '../../abstract/types';

export class QuizPage extends Page {
  readonly logo: Image;
  readonly backMenu: NavigateButton;
  readonly nameCategory: TypeQuiz;
  quizElement?: QuizElement;

  constructor(nameCategory: TypeQuiz) {
    super(['header-quiz'], ['main-quiz']);

    this.logo = new Image(['logo', 'logo-navigate']);
    this.backMenu = new NavigateButton(Constants.NAV_BUTTON_CATEGORY, ['icon-back']);

    this.nameCategory = nameCategory;
  }
  
  loadQuiz(question: PicturesType, answers: string[]) {
    this.quizElement = new QuizElement([], this.nameCategory, question, answers);
  }

  addComponents() {

    
    this.removeComponents();
    this.header.component.append(
      this.logo.component, 
      this.backMenu.component,
      );
    if (this.quizElement) {
      this.quizElement.pictureQuiz.style.backgroundImage = 
        `url(../assets/pictures/img/${this.quizElement.numberQuiz}.jpg)`;
      this.main.component.append(
        this.quizElement.component
      );
    }
  }
}