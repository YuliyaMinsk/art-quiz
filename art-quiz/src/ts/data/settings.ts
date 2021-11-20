import { onoff } from '../abstract/types';

export class SettingsQuiz { 
  sounds: onoff;
  volume: number;
  gameForTime: onoff;
  timer: number;

  constructor() {
    this.sounds = 'off';
    this.volume = 25;
    this.gameForTime = 'off';
    this.timer = 10; 
  }
  
}
