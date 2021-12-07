import { BaseComponent } from '../../abstract/basecomponent';
import { Constants } from '../../abstract/constants';
import { TypeQuiz, PicturesType, ResultQuiz } from '../../abstract/types';

export class QuizElement extends BaseComponent {
  readonly pictureQuiz: HTMLElement;
  readonly questionQuiz: HTMLElement;
  readonly answersQuiz: HTMLButtonElement[];
  readonly timerQuiz: HTMLInputElement;
  timerText: HTMLElement;
  readonly indicatorQuiz: HTMLElement[];
  dataQuiz?: PicturesType;

  constructor(classes: string[] = [], typeQuiz: TypeQuiz) { 
    super('div', ['quiz-element', ...classes]);

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
        this.questionQuiz.textContent = Constants.QUIZ_QUESTION_ARTISTS;       
        break;
      case 'Pictures':
        this.questionQuiz.textContent = Constants.QUIZ_QUESTION_PICTURES;     
        break;
    }

    const divAnswer = document.createElement('div');
    divAnswer.classList.add('answer-box');
  
    this.answersQuiz = Array.from({length: 4}, function() {return document.createElement('button');});
    this.answersQuiz.forEach((button, index) => {
      button.classList.add('button-quiz');
    });

    const divTimer = document.createElement('div');
    divTimer.classList.add('timer-box');

    this.timerQuiz = document.createElement('input');
    this.timerQuiz.setAttribute('type', 'range');
    this.timerQuiz.setAttribute('min', '0');
    //this.timerQuiz.setAttribute('max', String(settings.timer));
    this.timerQuiz.setAttribute('value', '0');
    this.timerQuiz.setAttribute('step', '1');

    this.timerText = document.createElement('p');
    this.timerText.classList.add('timer-text');

    const divIndicator = document.createElement('div');
    divIndicator.classList.add('indicator-box');

    this.indicatorQuiz = Array.from({length: 10}, function() {return document.createElement('div');});
    this.indicatorQuiz.forEach((bullet, index) => {
      bullet.classList.add('indicator-quiz'); 
    });

    this.component.append(
      divTimer,
      this.pictureQuiz,
      divIndicator,
      this.questionQuiz,
      divAnswer
    );

    divTimer.append(
      this.timerQuiz,
      this.timerText
    );

    this.answersQuiz.forEach(button => divAnswer.append(button));
    this.indicatorQuiz.forEach(button => divIndicator.append(button));
  }

  setQuizButtons(typeQuiz: TypeQuiz, question: PicturesType, answers: string[], results: string[]) {    

    this.dataQuiz = question;
    this.answersQuiz.forEach((button, index) => {
      button.classList.remove('button-win');
      button.classList.remove('button-lose');
      switch (typeQuiz) {
        case 'Artists':
          button.textContent = answers[index];     
          break;
        case 'Pictures':
          button.id = answers[index];
          button.style.backgroundImage = `url(https://rolling-scopes-school.github.io/yuliyaminsk-JSFE2021Q3/art-quiz/assets/pictures/img/${answers[index]}.jpg)`;
          break;
      } 
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
        this.questionQuiz.textContent = Constants.QUIZ_QUESTION_ARTISTS;       
        break;
      case 'Pictures':
        this.questionQuiz.textContent = Constants.QUIZ_QUESTION_PICTURES + ` ${this.dataQuiz.author}?`;     
        break;
    }
  }

}
