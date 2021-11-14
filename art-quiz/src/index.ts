import './sass/style.scss';
import { Controller } from './ts/controller'

import image from './assets/images/art-quiz-logo.svg';

window.onload = () => {
  const appElement = document.getElementById('root');

  if (!appElement) throw Error('Root element not found');
 
  new Controller(appElement);

}
