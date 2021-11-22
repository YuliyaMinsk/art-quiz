import { BaseComponent } from '../../abstract/basecomponent';
import { TypeQuiz, PicturesType, ResultQuiz } from '../../abstract/types';

export class QuizElement extends BaseComponent {
  readonly pictureQuiz: HTMLElement;
  readonly questionQuiz: HTMLElement;
  readonly answersQuiz: HTMLButtonElement[];
  readonly timerQuiz: HTMLInputElement;
  readonly indicatorQuiz: HTMLElement[];
  dataQuiz?: PicturesType;

  constructor(classes: string[] = [], typeQuiz: TypeQuiz) { // , question: PicturesType, answers: string[]
    super('div', ['quiz-element', ...classes]);

    // this.numberQuiz = '0' // question.imageNum;

    this.pictureQuiz = document.createElement('div');
    this.pictureQuiz.classList.add('picture-quiz');
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
        this.questionQuiz.textContent = `Какую картину написал ... ?`;     
        break;
    }

    const divAnswer = document.createElement('div');
    divAnswer.classList.add('answer-box');
  
    this.answersQuiz = Array.from({length: 4}, function() {return document.createElement('button');});
    this.answersQuiz.forEach((button, index) => {
      button.classList.add('button-quiz');
    });

    this.timerQuiz = document.createElement('input');
    this.timerQuiz.setAttribute('type', 'range');
    this.timerQuiz.setAttribute('min', '0');
    //this.timerQuiz.setAttribute('max', String(settings.timer));
    this.timerQuiz.setAttribute('value', '0');
    this.timerQuiz.setAttribute('step', '1');

    const divIndicator = document.createElement('div');
    divIndicator.classList.add('indicator-box');

    this.indicatorQuiz = Array.from({length: 10}, function() {return document.createElement('div');});
    this.indicatorQuiz.forEach((bullet, index) => {
      bullet.classList.add('indicator-quiz'); 
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

    divIndicator.append(      // change to array... this.roundButtons.forEach(button => this.main.component.append(button));
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

  setQuizButtons(typeQuiz: TypeQuiz, question: PicturesType, answers: string[], results: string[]) {    

    this.dataQuiz = question;
    this.answersQuiz.forEach((button, index) => {
      button.classList.remove('button-win');
      button.classList.remove('button-lose');
      button.textContent = answers[index]; 
    });
    this.indicatorQuiz.forEach((bullet, index) => {
      switch (results[index]) {      
        case 'null':
          bullet.classList.remove('win');
          bullet.classList.remove('lose');
          break;
        case '1':
          bullet.classList.add('win');
          bullet.classList.remove('lose');
          break;
        case '0':
          bullet.classList.remove('win');
          bullet.classList.add('lose');
          break;
        }
    });
    switch (typeQuiz) {
      case 'Artists':
        this.questionQuiz.textContent = 'Кто автор данной картины?';       
        break;
      case 'Pictures':
        this.questionQuiz.textContent = `Какую картину написал ${this.dataQuiz.author}?`;     
        break;
    }
  }

}
