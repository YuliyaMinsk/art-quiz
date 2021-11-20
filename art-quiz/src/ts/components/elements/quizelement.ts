import { BaseComponent } from '../../abstract/basecomponent';

export class QuizElement extends BaseComponent {

  constructor(classes: string[] = [], nameCategory: string, quizNumber: number) {
    super('div', ['quiz-element', ...classes]);

    const div = document.createElement('div');
    div.classList.add('answer-box');

  }
}