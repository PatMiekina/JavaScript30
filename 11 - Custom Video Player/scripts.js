//// 1. Get our elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');

const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

//// 2. Build our functions
function togglePlay() {
  // method 1
  const method = video.paused ? 'play' : 'pause';
  video[method]();
  // // method 2
  // if (video.paused) {
  //   video.play();
  // } else {
  //   video.pause();
  // }
}

// update play symbol to pause/play
function updateButton() {
  const icon = this.paused ? '►' : '❚ ❚';
  toggle.textContent = icon;
}

// skip buttons
function skip() {
  // console.log(this.dataset);
  video.currentTime += parseFloat(this.dataset.skip);
}
//
function handleRangeUpdate () {
  video[this.name] = this.value;
}

//// 3. Hook up the event listeners
video.addEventListener('click', togglePlay);
// update play symbol to pause/play
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);

toggle.addEventListener('click', togglePlay);

skipButtons.forEach(button => button.addEventListener('click', skip));

ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));
