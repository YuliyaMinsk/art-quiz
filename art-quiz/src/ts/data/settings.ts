interface Settings {
  sounds: 'off' | 'on';
  volume: number;
  gameForTime: 'off' | 'on';
  timer: number;
}

export class SettingsQuiz implements Settings { 
  sounds: 'off' | 'on';
  volume: number;
  gameForTime: 'off' | 'on';
  timer: number;

  constructor() {
    this.sounds = 'off';
    this.volume = 0;
    this.gameForTime = 'off';
    this.timer = 0; 
  }
  
}

export default SettingsQuiz;