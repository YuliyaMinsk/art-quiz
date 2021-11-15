import { Header } from './components/elements/header';
import { Main } from './components/elements/main';
import { Footer } from './components/elements/footer';
import { WelcomeButton } from './components/buttons/welcomebutton';
import { NavigateButton } from './components/buttons/navigatebutton';
import { QuizButton } from './components/buttons/quizbutton';
import { WelcomePage } from './components/pages/welcomepage';
import { SettingsPage } from './components/pages/settingspage';

export class Controller {
  //private readonly welcomePage: WelcomePage;
  private readonly settingsPage: SettingsPage;

  constructor(private readonly rootElement: HTMLElement) {
    //this.welcomePage = new WelcomePage(rootElement);
    this.settingsPage = new SettingsPage(rootElement);
    console.log('controller');
  }

}