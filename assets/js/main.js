// mike flinn — portfolio
// main.js

// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const overlay = document.querySelector('.nav-overlay');

if (toggle && overlay) {
  toggle.addEventListener('click', () => {
    overlay.classList.toggle('open');
    document.body.style.overflow = overlay.classList.contains('open') ? 'hidden' : '';
  });
  overlay.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      overlay.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

// Reel: click poster to play, then hand off to native controls
const reelPoster = document.getElementById('reel-poster');
const reelVideo = document.getElementById('reel-video');

if (reelPoster && reelVideo) {
  reelPoster.addEventListener('click', () => {
    reelVideo.controls = true;
    reelPoster.classList.add('hidden');
    reelVideo.play();
  });
}
