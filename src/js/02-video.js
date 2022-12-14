import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const LOCALSTORAGE_KEY = 'videoplayer-current-time';
savedTime();
player.on(
  'timeupdate',
  throttle(function (data) {
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(data.seconds));
  }, 1000)
);
function savedTime() {
  const currentTime = localStorage.getItem(LOCALSTORAGE_KEY);
  if (currentTime) {
    player.setCurrentTime(localStorage.getItem(LOCALSTORAGE_KEY));
  }
}
