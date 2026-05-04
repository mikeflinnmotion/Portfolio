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

// Reel: click overlay to play/pause
const reelOverlay = document.querySelector('.reel-overlay');
const reelVideo = document.querySelector('.reel video');

if (reelOverlay && reelVideo) {
  reelOverlay.addEventListener('click', () => {
    if (reelVideo.paused) {
      reelVideo.play();
      reelOverlay.style.opacity = '0';
      reelOverlay.style.pointerEvents = 'none';
    }
  });
  reelVideo.addEventListener('pause', () => {
    reelOverlay.style.opacity = '1';
    reelOverlay.style.pointerEvents = 'auto';
  });
  reelVideo.addEventListener('ended', () => {
    reelOverlay.style.opacity = '1';
    reelOverlay.style.pointerEvents = 'auto';
  });
}
