import { ResultQuiz } from "../abstract/types";

export class Results {
  resultArtistQuiz: string[][] = Array(12).fill('null').map(x => Array(10).fill('null'));
  resultPaintingsQuiz: string[][] = Array(12).fill('null').map(x => Array(10).fill('null'));;
  
  constructor() {
    this.loadFromLocalStorage();
  }

  saveToLocalStorage() {
    localStorage.setItem('result-artist-0', this.resultArtistQuiz[0].join(','));
    localStorage.setItem('result-artist-1', this.resultArtistQuiz[1].join(','));
    localStorage.setItem('result-artist-2', this.resultArtistQuiz[2].join(','));
    localStorage.setItem('result-artist-3', this.resultArtistQuiz[3].join(','));
    localStorage.setItem('result-artist-4', this.resultArtistQuiz[4].join(','));
    localStorage.setItem('result-artist-5', this.resultArtistQuiz[5].join(','));
    localStorage.setItem('result-artist-6', this.resultArtistQuiz[6].join(','));
    localStorage.setItem('result-artist-7', this.resultArtistQuiz[7].join(','));
    localStorage.setItem('result-artist-8', this.resultArtistQuiz[8].join(','));
    localStorage.setItem('result-artist-9', this.resultArtistQuiz[9].join(','));
    localStorage.setItem('result-artist-10', this.resultArtistQuiz[10].join(','));
    localStorage.setItem('result-artist-11', this.resultArtistQuiz[11].join(','));
    console.log('SAVE');
  }

  loadFromLocalStorage() {
    console.log('LOAD???', localStorage.getItem('result-artist-0'));
    console.log('LOAD???', localStorage.getItem('result-artist-1'));
    console.log('LOAD???', localStorage.getItem('result-artist-2'));
    console.log('LOAD???', localStorage.getItem('result-artist-3'));
    console.log('LOAD???', localStorage.getItem('result-artist-4'));
    console.log('LOAD???', localStorage.getItem('result-artist-5'));
    console.log('LOAD???', localStorage.getItem('result-artist-6'));
    console.log('LOAD???', localStorage.getItem('result-artist-7'));
    console.log('LOAD???', localStorage.getItem('result-artist-8'));
    console.log('LOAD???', localStorage.getItem('result-artist-9'));
    console.log('LOAD???', localStorage.getItem('result-artist-10'));
    console.log('LOAD???', localStorage.getItem('result-artist-11'));
    if (localStorage.getItem('result-artist-0')) {
      this.resultArtistQuiz[0] =  (localStorage.getItem('result-artist-0') || '').split(',');
    }
    if (localStorage.getItem('result-artist-1')) {
      this.resultArtistQuiz[1] =  (localStorage.getItem('result-artist-1') || '').split(',');
    }
    if (localStorage.getItem('result-artist-2')) {
      this.resultArtistQuiz[2] =  (localStorage.getItem('result-artist-2') || '').split(',');
    }
    if (localStorage.getItem('result-artist-3')) {
      this.resultArtistQuiz[3] =  (localStorage.getItem('result-artist-3') || '').split(',');
    }
    if (localStorage.getItem('result-artist-4')) {
      this.resultArtistQuiz[4] =  (localStorage.getItem('result-artist-4') || '').split(',');
    }
    if (localStorage.getItem('result-artist-5')) {
      this.resultArtistQuiz[5] =  (localStorage.getItem('result-artist-5') || '').split(',');
    }
    if (localStorage.getItem('result-artist-6')) {
      this.resultArtistQuiz[6] =  (localStorage.getItem('result-artist-6') || '').split(',');
    }
    if (localStorage.getItem('result-artist-7')) {
      this.resultArtistQuiz[7] =  (localStorage.getItem('result-artist-7') || '').split(',');
    }
    if (localStorage.getItem('result-artist-8')) {
      this.resultArtistQuiz[8] =  (localStorage.getItem('result-artist-8') || '').split(',');
    }
    if (localStorage.getItem('result-artist-9')) {
      this.resultArtistQuiz[9] =  (localStorage.getItem('result-artist-9') || '').split(',');
    }
    if (localStorage.getItem('result-artist-10')) {
      this.resultArtistQuiz[10] =  (localStorage.getItem('result-artist-10') || '').split(',');
    }
    if (localStorage.getItem('result-artist-11')) {
      this.resultArtistQuiz[11] =  (localStorage.getItem('result-artist-11') || '').split(',');
    }
  }

  print(info: string = '') {
    console.log('resultArtistQuiz: ', this.resultArtistQuiz);
    //console.log('resultPaintingsQuiz: ', this.resultPaintingsQuiz);
  }
}
