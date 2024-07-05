const video = document.getElementById('video');
const playPause = document.getElementById('play-pause');
const stop = document.getElementById('stop');
const seek = document.getElementById('seek');

playPause.addEventListener('click', () => {
  if (video.paused) {
    video.play();
    playPause.innerHTML = 'Pause';
  } else {
    video.pause();
    playPause.innerHTML = 'Play';
  }
});

stop.addEventListener('click', () => {
  video.pause();
  video.currentTime = 0;
  playPause.innerHTML = 'Play';
});

video.addEventListener('timeupdate', () => {
  const currentTime = video.currentTime;
  const duration = video.duration;
  const progress = (currentTime / duration) * 100;
  seek.value = progress;
});

