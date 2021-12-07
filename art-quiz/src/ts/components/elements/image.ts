import { BaseComponent } from '../../abstract/basecomponent';

export class Image extends BaseComponent {
  readonly imageElement?: HTMLImageElement;

  constructor(classes: string[] = [], imageLink?: string, imageDescription?: string) {
    super('div', [...classes]);

    if (imageLink) {
      this.imageElement = document.createElement('img');
      this.imageElement.src = `./assets/${imageLink}`;
      this.imageElement.alt = `${imageDescription}`;
      this.component.appendChild(this.imageElement);
    }
  }
}
