import { Page } from './page';
import { Image } from '../elements/image';
import { NavigateButton } from '../buttons/navigatebutton';
import { CategoryElement } from '../elements/categoryelement';
import { Constants } from '../../abstract/constants';
import { TypeQuiz, PicturesType } from '../../abstract/types';


export class CategoryPage extends Page {
  readonly logo: Image;
  readonly backMenu: NavigateButton;
  readonly roundButtons: CategoryElement[];

  constructor(nameCategory: TypeQuiz, startNumber: number) { // ??? Do I need the variables?
    super(['header-category'], ['main-category']);

    this.logo = new Image(['logo', 'logo-navigate']);
    this.backMenu = new NavigateButton(Constants.NAV_BUTTON_CATEGORY, ['icon-back']);
    this.roundButtons = Array.from({length: Constants.CATEGORY_ROUNDS}, function() {return new CategoryElement()});
  }
  
  addComponents(picturesCategoryData: PicturesType[]) {    
    this.roundButtons.forEach((button, index) => {
      button.roundCategoryNumber = picturesCategoryData[index].imageNum;
      button.roundButton.style.backgroundImage = `url(../assets/pictures/img/${button.roundCategoryNumber}.jpg)`;
      button.roundButton.setAttribute('id', picturesCategoryData[index].imageNum);
      button.roundText.textContent = (index + 1) + ' раунд';
      if (button.isCategoryCompleted) {
        button.numberCompletedText.textContent = '0 / 10'; // !!!! should change for info from local storage
      } else {
        button.roundButton.classList.add('disable');
      }
    });

    this.removeComponents();    
    this.header.component.append(
      this.logo.component, 
      this.backMenu.component,
    );
    this.main.component.append(           // change to array... this.roundButtons.forEach(button => this.main.component.append(button)); 
      this.roundButtons[0].component,
      this.roundButtons[1].component,
      this.roundButtons[2].component,
      this.roundButtons[3].component,
      this.roundButtons[4].component,
      this.roundButtons[5].component,
      this.roundButtons[6].component,
      this.roundButtons[7].component,
      this.roundButtons[8].component,
      this.roundButtons[9].component,
      this.roundButtons[10].component,
      this.roundButtons[11].component
    )
  }

  

}