import { Page } from './page';
import { Image } from '../elements/image';
import { NavigateButton } from '../buttons/navigatebutton';
import { QuizElement } from '../elements/quizelement';
import { Constants } from '../../abstract/constants';
import { picturesType } from '../../abstract/types';

export class QuizPage extends Page {
  readonly logo: Image;
  readonly backMenu: NavigateButton;
  readonly quizElement: QuizElement;

  constructor(nameCategory: string, quizNumber: number) {
    super(['header-quiz'], ['main-quiz']);

    this.logo = new Image(['logo', 'logo-navigate']);
    this.backMenu = new NavigateButton(Constants.NAV_BUTTON_CATEGORY, ['icon-back']);

    this.quizElement = new QuizElement([], nameCategory, quizNumber);
  }
}