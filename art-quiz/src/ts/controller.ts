import { Header } from './components/elements/header';
import { Main } from './components/elements/main';
import { Footer } from './components/elements/footer';
import { WelcomeButton } from './components/buttons/welcomebutton';
import { NavigateButton } from './components/buttons/navigatebutton';
import { QuizButton } from './components/buttons/quizbutton';
import { WelcomePage } from './components/pages/welcomepage';

export class Controller {
  private readonly welcomePage: WelcomePage;

  constructor(private readonly rootElement: HTMLElement) {
    this.welcomePage = new WelcomePage(rootElement);
    console.log('controller');
  }

// async function render() {
//   const subHeader = document.createElement('h2');
//   subHeader.innerHTML = 'This elements was created by js';
//   const logo = await createImage(image);
//   (<Element>logo).classList.add('logo');
//   document.body.appendChild(subHeader);
//   document.body.appendChild(logo);
// }

}