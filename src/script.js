document.querySelector('#play').onclick = play;
document.querySelector('#pause').onclick = pause;
document.querySelector('#stop').onclick = stop;
document.querySelector('#quicker').onclick = quicker;
document.querySelector('#slower').onclick = slower;
document.querySelector('#normal').onclick = normal;
document.querySelector('#volume').oninput = videoVolume;

let video;
let display;
let progress;

video = document.querySelector('#video-player');
progress = document.querySelector('#progress');
video.ontimeupdate = progressUpdate;

progress.onclick = videoRewind;
function play() {
  video.play();
}

function pause() {
  video.pause();
}

function stop() {
  video.pause();
  video.currentTime = 0;
}

function quicker() {
  video.play();
  video.playbackRate = 5;
}

function slower() {
  video.play();
  video.playbackRate = 0.5;
}

function normal() {
  video.play();
  video.playbackRate = 1;
}

function videoVolume() {
  let volume = this.value;
  video.volume = volume / 100;
}

function progressUpdate() {
  let duration = video.duration;
  let videoCurrentTiime = video.currentTime;
  progress.value = (100 * videoCurrentTiime) / duration;
}

function videoRewind() {
  let width = this.offsetWidth;
  let currentPosition = event.offsetX;
  this.value = (100 * currentPosition) / width;
  video.pause();
  video.currentTime = video.duration * (currentPosition / width);
  video.play();
}
