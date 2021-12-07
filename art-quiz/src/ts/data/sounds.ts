import { Constants } from '../abstract/constants';

export class Sounds {
  static soundClick = new Audio(Constants.SOUND_CLICK_URL);
  static soundWin = new Audio(Constants.SOUND_WIN_URL);
  static soundLose = new Audio(Constants.SOUND_LOSE_URL);
  static soundEndRound = new Audio(Constants.SOUND_END_ROUND_URL);
}
