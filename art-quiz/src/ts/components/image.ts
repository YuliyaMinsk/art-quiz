import { BaseComponent } from '../abstract/basecomponent';

export class Image extends BaseComponent {

  constructor(classes: string[] = [], imageLink: string, imageDescription: string) {
    super('div', [...classes]);
    this.component.innerHTML = `    	
      <img src="./assets/${imageLink}" alt="${imageDescription}">
    `
  }
}