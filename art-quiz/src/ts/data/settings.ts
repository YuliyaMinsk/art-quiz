export class SettingsQuiz { 
  isSound?: boolean;
  volume?: number;
  gameForTime?: boolean;
  timer?: number;

  constructor() {
    if (localStorage.getItem('settings-sounds')) {
      this.loadFromLocalStorage();
    } else {
      this.setToDefault();
    }
  }
  
  saveToLocalStorage() {
    localStorage.setItem('settings-sounds', String(this.isSound));
    localStorage.setItem('settings-volume', String(this.volume));
    localStorage.setItem('settings-game-for-time', String(this.gameForTime));
    localStorage.setItem('settings-timer', String(this.timer));
  }

  loadFromLocalStorage() {
    if (localStorage.getItem('settings-sounds') === 'true') { 
      this.isSound = true;
    } else {
      this.isSound = false;
    }
    this.volume = Number(localStorage.getItem('settings-volume'));
    if (localStorage.getItem('settings-game-for-time') === 'true') {
      this.gameForTime = true;
    } else {
      this.gameForTime = false;
    }
    this.timer =  Number(localStorage.getItem('settings-timer'));
  }

  setToDefault() {
    this.isSound = true;
    this.volume = 25;
    this.gameForTime = false;
    this.timer = 10; 
    this.saveToLocalStorage();
  }

  print(info: string = '') {
    console.log(info, this.isSound, this.volume, this.gameForTime, this.timer);
  }
}
