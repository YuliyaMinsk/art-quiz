import { BaseComponent } from '../../abstract/basecomponent';
import { ModalType, PicturesType, ResultQuiz } from '../../abstract/types';
import { BigButton } from '../buttons/bigbutton';

export class Modal extends BaseComponent {
  imageModal: HTMLElement;
  namePictureModal: HTMLElement;
  authorModal: HTMLElement;  
  score: HTMLElement;
  readonly nextButton: BigButton;
  readonly homeButton: BigButton;
  readonly categoryButton: BigButton;
  readonly close: HTMLElement;
  
  constructor(classes: string[] = [], id: ModalType) {
    super('div', ['modal', ...classes]);

    this.component.setAttribute('id', id);
    this.component.classList.add(id);

    this.close = document.createElement('span');
    this.close.classList.add('close');
    this.close.classList.add('hide-block');
    this.close.textContent = '×';

    const div = document.createElement('div');
    div.classList.add('modal-content');
    div.classList.add(id);

    const titleModal = document.createElement('h3');
    titleModal.classList.add('modal-title');

    this.imageModal = document.createElement('div');
    this.imageModal.classList.add('modal-image');

    this.namePictureModal = document.createElement('p');
    this.namePictureModal.classList.add('modal-name-picture');

    this.authorModal = document.createElement('p');
    this.authorModal.classList.add('modal-author');

    this.score = document.createElement('p');
    this.score.classList.add('modal-score');

    const divButtons = document.createElement('div');
    divButtons.classList.add('modal-buttons');

    this.nextButton = new BigButton('Продолжить', ['modal-big-button', id]);
    this.homeButton = new BigButton('На главную', ['modal-big-button', id]);
    this.categoryButton = new BigButton('Еще один раунд!', ['modal-big-button', id]);

    if (id === 'modal-win') {
      titleModal.textContent = 'Это правильный ответ!';
      this.imageModal.classList.add('modal-win-or-lose');
      this.score.classList.add('hide-block');
      this.homeButton.component.classList.add('hide-block');
      this.categoryButton.component.classList.add('hide-block');
    }

    if (id === 'modal-lose') {
      titleModal.textContent = 'Это неправильный ответ';
      this.imageModal.classList.add('modal-win-or-lose');
      this.score.classList.add('hide-block');
      this.homeButton.component.classList.add('hide-block');
      this.categoryButton.component.classList.add('hide-block');
    }

    if (id === 'modal-end-tour') {
      titleModal.textContent = 'Поздравляем! Вы завершили раунд!';
      this.imageModal.classList.add('modal-end-tour');
      this.namePictureModal.classList.add('hide-block');
      this.authorModal.classList.add('hide-block');
      this.nextButton.component.classList.add('hide-block');
    }

    this.component.append(
      div
    );

    div.append(
      this.close,
      titleModal,
      this.imageModal,
      this.namePictureModal,
      this.authorModal,
      this.score,
      divButtons,
    );

    divButtons.append(
      this.nextButton.component,
      this.homeButton.component,
      this.categoryButton.component
    );
  }

  fillModalGame(question: PicturesType) {
    this.imageModal.style.backgroundImage = `url(https://rolling-scopes-school.github.io/yuliyaminsk-JSFE2021Q3/art-quiz/assets/pictures/img/${question.imageNum}.jpg)`;
    this.namePictureModal.textContent = question.name;
    this.authorModal.textContent = `${question.author}, ${question.year}`
  }

  fillModalEndTour(results: string[]) {
    let win = 0;
    for (let i = 0; i < results.length; i++) {
      if (results[i] === '1') win++;
    }
    this.score.textContent = `${win} / 10`;
  }

}
