type onoff = 'off' | 'on';

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

export default SettingsQuiz;