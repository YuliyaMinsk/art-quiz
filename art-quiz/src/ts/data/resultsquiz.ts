import { ResultQuiz } from "../abstract/types";

export class Results {
  resultArtistQuiz: string[][] = Array(12).fill('null').map(x => Array(10).fill('null'));
  resultPictureQuiz: string[][] = Array(12).fill('null').map(x => Array(10).fill('null'));;
  
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

    localStorage.setItem('result-picture-0', this.resultPictureQuiz[0].join(','));
    localStorage.setItem('result-picture-1', this.resultPictureQuiz[1].join(','));
    localStorage.setItem('result-picture-2', this.resultPictureQuiz[2].join(','));
    localStorage.setItem('result-picture-3', this.resultPictureQuiz[3].join(','));
    localStorage.setItem('result-picture-4', this.resultPictureQuiz[4].join(','));
    localStorage.setItem('result-picture-5', this.resultPictureQuiz[5].join(','));
    localStorage.setItem('result-picture-6', this.resultPictureQuiz[6].join(','));
    localStorage.setItem('result-picture-7', this.resultPictureQuiz[7].join(','));
    localStorage.setItem('result-picture-8', this.resultPictureQuiz[8].join(','));
    localStorage.setItem('result-picture-9', this.resultPictureQuiz[9].join(','));
    localStorage.setItem('result-picture-10', this.resultPictureQuiz[10].join(','));
    localStorage.setItem('result-picture-11', this.resultPictureQuiz[11].join(','));
    console.log('SAVE');
  }

  loadFromLocalStorage() {
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

    if (localStorage.getItem('result-picture-0')) {
      this.resultPictureQuiz[0] =  (localStorage.getItem('result-picture-0') || '').split(',');
    }
    if (localStorage.getItem('result-picture-1')) {
      this.resultPictureQuiz[1] =  (localStorage.getItem('result-picture-1') || '').split(',');
    }
    if (localStorage.getItem('result-picture-2')) {
      this.resultPictureQuiz[2] =  (localStorage.getItem('result-picture-2') || '').split(',');
    }
    if (localStorage.getItem('result-picture-3')) {
      this.resultPictureQuiz[3] =  (localStorage.getItem('result-picture-3') || '').split(',');
    }
    if (localStorage.getItem('result-picture-4')) {
      this.resultPictureQuiz[4] =  (localStorage.getItem('result-picture-4') || '').split(',');
    }
    if (localStorage.getItem('result-picture-5')) {
      this.resultPictureQuiz[5] =  (localStorage.getItem('result-picture-5') || '').split(',');
    }
    if (localStorage.getItem('result-picture-6')) {
      this.resultPictureQuiz[6] =  (localStorage.getItem('result-picture-6') || '').split(',');
    }
    if (localStorage.getItem('result-picture-7')) {
      this.resultPictureQuiz[7] =  (localStorage.getItem('result-picture-7') || '').split(',');
    }
    if (localStorage.getItem('result-picture-8')) {
      this.resultPictureQuiz[8] =  (localStorage.getItem('result-picture-8') || '').split(',');
    }
    if (localStorage.getItem('result-picture-9')) {
      this.resultPictureQuiz[9] =  (localStorage.getItem('result-picture-9') || '').split(',');
    }
    if (localStorage.getItem('result-picture-10')) {
      this.resultPictureQuiz[10] =  (localStorage.getItem('result-picture-10') || '').split(',');
    }
    if (localStorage.getItem('result-picture-11')) {
      this.resultPictureQuiz[11] =  (localStorage.getItem('result-picture-11') || '').split(',');
    }
  }

  print(info: string = '') {
    console.log('resultArtistQuiz: ', this.resultArtistQuiz);
    console.log('resultPictureQuiz: ', this.resultPictureQuiz);
  }
}
