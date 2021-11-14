import { Page } from '../view/pages';
import { WelcomeButton, NavigateButton, QuizButton } from '../view/buttons';

const welcomePage = new Page('div', ['root']);

// async function render() {
//   const subHeader = document.createElement('h2');
//   subHeader.innerHTML = 'This elements was created by js';
//   const logo = await createImage(image);
//   (<Element>logo).classList.add('logo');
//   document.body.appendChild(subHeader);
//   document.body.appendChild(logo);
// }