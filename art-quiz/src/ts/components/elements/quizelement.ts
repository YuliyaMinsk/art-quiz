import { BaseComponent } from '../../abstract/basecomponent';
import { TypeQuiz, PicturesType } from '../../abstract/types';

export class QuizElement extends BaseComponent {
  readonly pictureQuiz: HTMLElement;
  readonly questionQuiz: HTMLElement;
  readonly answersQuiz: HTMLButtonElement[];
  readonly timerQuiz: HTMLInputElement;
  readonly indicatorQuiz: HTMLElement[];
  readonly numberQuiz: string;

  constructor(classes: string[] = [], typeQuiz: TypeQuiz, question: PicturesType, answers: string[]) {
    super('div', ['quiz-element', ...classes]);

    this.numberQuiz = question.imageNum;

    this.pictureQuiz = document.createElement('div');
    this.pictureQuiz.classList.add('picture-quiz');
    // this.pictureQuiz.setAttribute('src', `../assets/pictures/img/${question.imageNum}.jpg`);
    // this.pictureQuiz.setAttribute('width', '300px');
    // this.pictureQuiz.setAttribute('heigth', '300px');
    switch (typeQuiz) {
      case 'Artists':
        this.pictureQuiz.classList.add('image-main-quiz');        
        break;
      case 'Pictures':
        this.pictureQuiz.classList.add('hide-block');     
        break;
    }

    this.questionQuiz = document.createElement('h3');
    this.questionQuiz.classList.add('question-quiz');
    switch (typeQuiz) {
      case 'Artists':
        this.questionQuiz.textContent = 'Кто автор данной картины?';       
        break;
      case 'Pictures':
        this.questionQuiz.textContent = `Какую картину написал ${question.author}?`;     
        break;
    }

    const divAnswer = document.createElement('div');
    divAnswer.classList.add('answer-box');
  
    this.answersQuiz = Array.from({length: 4}, function() {return document.createElement('button');});
    this.answersQuiz.forEach((button, index) => {
      button.classList.add('button-quiz'); 
      button.textContent = answers[index];
    });

    this.timerQuiz = document.createElement('input');
    this.timerQuiz.setAttribute('type', 'range');
    this.timerQuiz.setAttribute('min', '0');
    //this.timerQuiz.setAttribute('max', String(settings.timer));
    this.timerQuiz.setAttribute('value', '0');
    this.timerQuiz.setAttribute('step', '1');

    const divIndicator = document.createElement('div');
    divIndicator.classList.add('indicator-box');

    // this.indicatorQuiz = Array.from({length: 10}, function() {return document.createElement('input');});
    // this.indicatorQuiz.forEach((bullet, index) => {
    //   bullet.setAttribute('type', 'checkbox');
    //   bullet.classList.add('indicator-quiz'); 
    //   bullet.readOnly = true;
    //   bullet.disabled = true;
    //   if (index <= Number(question.imageNum)) {
    //     bullet.checked = true;
    //   }
    // });

    this.indicatorQuiz = Array.from({length: 10}, function() {return document.createElement('div');});
    this.indicatorQuiz.forEach((bullet, index) => {
      bullet.classList.add('indicator-quiz'); 
      if (index <= Number(question.imageNum)) {
        bullet.classList.add('indicator-yes');
      }
    });

    this.component.append(
      this.timerQuiz,
      this.pictureQuiz,
      divIndicator,
      this.questionQuiz,
      divAnswer
    );

    divAnswer.append(         // change to array... this.roundButtons.forEach(button => this.main.component.append(button)); 
      this.answersQuiz[0],
      this.answersQuiz[1],
      this.answersQuiz[2],
      this.answersQuiz[3],
    );

    divIndicator.append(
      this.indicatorQuiz[0],
      this.indicatorQuiz[1],
      this.indicatorQuiz[2],
      this.indicatorQuiz[3],
      this.indicatorQuiz[4],
      this.indicatorQuiz[5],
      this.indicatorQuiz[6],
      this.indicatorQuiz[7],
      this.indicatorQuiz[8],
      this.indicatorQuiz[9],
    );
  }

}
