import './sass/style.scss';
import { Controller } from './ts/controller'
import { showEstimate } from './ts/data/estimate';

window.onload = () => {
  const appElement = document.getElementById('root');
  
  if (!appElement) {
    throw Error('Root element not found');
  }
  
  const appController = new Controller(appElement);
  appController.start();
  showEstimate();
}
