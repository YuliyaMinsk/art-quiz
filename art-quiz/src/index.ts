import './sass/style.scss';
import { Controller } from './ts/controller'

window.onload = () => {
  const appElement = document.getElementById('root');
  
  if (!appElement) throw Error('Root element not found');
  
  const appController = new Controller(appElement);
  appController.start();

}
