import { BaseComponent } from '../abstract/basecomponent';

export class Page extends BaseComponent {

  constructor(tagName: keyof HTMLElementTagNameMap = 'div', classes: string[] = []) {
    super(tagName, classes);
  }

  createImage = (src: string) => new Promise<HTMLImageElement>((res, rej) => {
    const img = new Image();
    img.onload = () => res(img);
    img.onerror = rej;
    img.src = src;
  });
  
}