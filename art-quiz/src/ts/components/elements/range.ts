import { BaseComponent } from '../../abstract/basecomponent';
import { Image } from '../elements/image';

export class Range extends BaseComponent {
  readonly rangeElement: HTMLInputElement;
  readonly labelElement: HTMLElement;

  constructor(classes: string[] = [], type: string, numberFrom: number = 0, numberTo: number = 100, 
    textDescription: string) {
    super('div', [...classes]);

    this.labelElement = document.createElement('div');
    this.labelElement.classList.add('text-description');
    this.labelElement.textContent = textDescription;

    this.rangeElement = document.createElement('input');
    this.rangeElement.setAttribute('type', 'range');
    this.rangeElement.setAttribute('min', String(numberFrom));
    this.rangeElement.setAttribute('max', String(numberTo));
    this.rangeElement.setAttribute('value', String((numberFrom + numberTo) / 4));
    this.rangeElement.setAttribute('step', '1');

    if (type === 'setting') {
      const div = new BaseComponent('div', ['icons-volume']);
      this.component.append(
        this.labelElement,
        this.rangeElement,
        div.component
      );

      const iconVolumeMute = new Image(['icon-volume-mute']);
      const iconVolumeUp = new Image(['icon-volume-up']);
      div.component.append(
        iconVolumeMute.component,
        iconVolumeUp.component
      );
    }
  }

  changeRange() {
    let value = ( +this.rangeElement.value - +this.rangeElement.min ) / 
      ( +this.rangeElement.max - +this.rangeElement.min ) * 100;
    this.rangeElement.style.background = 'linear-gradient(to right, #ff6e40 0%, #ff6e40 ' + 
      value + '%, #f5f0e1 ' + value + '%, #f5f0e1 100%)';
  }
}