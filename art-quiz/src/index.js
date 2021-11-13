import './sass/style.scss';
import image from './assets/images/art-quiz-logo.svg';

const createImage = (src) => new Promise((res, rej) => {
  const img = new Image();
  img.onload = () => res(img);
  img.onerror = rej;
  img.src = src;
});

async function render() {
  const main = document.querySelector('.main');
  const subHeader = document.createElement('h2');
  subHeader.innerHTML = 'This elements was created by js';
  const logo = await createImage(image);
  logo.classList.add('logo');
  main.appendChild(logo);
  main.appendChild(subHeader);
}

render();
