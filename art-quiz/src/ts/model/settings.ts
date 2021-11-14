type Settings = {
  sounds: 'off' | 'on',
  volume: number,
  gameForTime: 'off' | 'on',
  timer: number
}

let settings: Settings = { // это типа значения по умолчанию??? Надо будет на практике посмотреть
  sounds: 'off',
  volume: 0,
  gameForTime: 'off',
  timer: 0
}

export default settings;