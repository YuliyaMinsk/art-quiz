import { Page } from './page';
import { Image } from '../elements/image';
import { NavigateButton } from '../buttons/navigatebutton';
import { QuizElement } from '../elements/quizelement';
import { Constants } from '../../abstract/constants';
import { PicturesType, TypeQuiz } from '../../abstract/types';
import { Modal } from '../elements/modal';

export class QuizPage extends Page {
  readonly logo: Image;
  readonly backMenu: NavigateButton;
  readonly winModal: Modal;
  readonly loseModal: Modal;
  readonly endModal: Modal;
  readonly nameCategory: TypeQuiz;
  quizElement?: QuizElement;

  constructor(nameCategory: TypeQuiz) {
    super(['header-quiz'], ['main-quiz']);

    this.logo = new Image(['logo', 'logo-navigate']);
    this.backMenu = new NavigateButton(Constants.NAV_BUTTON_CATEGORY, ['icon-back']);
    this.nameCategory = nameCategory;
    this.quizElement = new QuizElement([], this.nameCategory);

    this.winModal = new Modal([], 'modal-win');
    this.loseModal = new Modal([], 'modal-lose');
    this.endModal = new Modal([], 'modal-end-tour');
  }
  
  loadQuiz(question: PicturesType, answers: string[]) {
    this.quizElement?.setQuizButtons(this.nameCategory, question, answers);
  }

  addComponents() {    
    this.removeComponents();
    this.header.component.append(
      this.logo.component, 
      this.backMenu.component,
      );
    if ((this.quizElement) && (this.quizElement.dataQuiz)) {
      this.quizElement.pictureQuiz.style.backgroundImage = 
        `url(../assets/pictures/img/${this.quizElement.dataQuiz.imageNum}.jpg)`;
      this.main.component.append(
        this.quizElement.component,
        this.winModal.component,
        this.loseModal.component,
        this.endModal.component
      );
    }
  }
}