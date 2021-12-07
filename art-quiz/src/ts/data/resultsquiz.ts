import { ResultQuiz } from "../abstract/types";

export class Results {
  resultArtistQuiz: string[][] = Array(12).fill('null').map(x => Array(10).fill('null'));
  resultPictureQuiz: string[][] = Array(12).fill('null').map(x => Array(10).fill('null'));;
  
  constructor() {
    this.loadFromLocalStorage();
  }

  saveToLocalStorage() {

    this.resultArtistQuiz.forEach((value, index) => {
      localStorage.setItem('result-artist-' + String(index), value.join(','));
      console.log(index, localStorage.getItem('result-artist-' + String(index)));
  });

    this.resultPictureQuiz.forEach((value, index) => 
      localStorage.setItem('result-picture-' + String(index), value.join(',')));

    console.log('SAVE');
  }

  loadFromLocalStorage() {

    this.resultArtistQuiz.forEach((value, index, resultArtistQuiz) => 
      resultArtistQuiz[index] = (localStorage.getItem('result-artist-' + String(index)) || '').split(','));

    this.resultPictureQuiz.forEach((value, index, resultPictureQuiz) => 
      resultPictureQuiz[index] = (localStorage.getItem('result-picture-' + String(index)) || '').split(','));   

    console.log('LOAD');
  }

  print(info: string = '') {
    console.log('resultArtistQuiz: ', this.resultArtistQuiz);
    console.log('resultPictureQuiz: ', this.resultPictureQuiz);
  }
}
