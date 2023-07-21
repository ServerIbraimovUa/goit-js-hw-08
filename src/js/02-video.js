import Player from '@vimeo/player';

import throttle from 'lodash.throttle';
console.log(throttle);
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const CURRENT_TIME_KEY = 'videoplayer-current-time';

function getCurrentTime(currentTime) {
  localStorage.setItem(CURRENT_TIME_KEY, JSON.stringify(currentTime.seconds));
}
player.on('timeupdate', throttle(getCurrentTime, 1000));

const currentValue = localStorage.getItem(CURRENT_TIME_KEY);
player.setCurrentTime(JSON.parse(currentValue));
console.log('ff');
