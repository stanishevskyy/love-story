'use strict';

const heartsContainer = document.getElementById('js-hearts');

function createHeart() {
  if (!heartsContainer) {
    return;
  }

  const heart = document.createElement('span');

  heart.className = 'absolute animate-float pointer-events-none';
  heart.textContent = '❤️';
  heart.style.left = `${Math.random() * 100}%`;
  heart.style.fontSize = `${12 + Math.random() * 20}px`;
  heart.style.bottom = 0;
  heart.style.animationDuration = `${4 + Math.random() * 4}s`;
  heart.style.opacity = `${0.3 + Math.random() * 0.7}`;

  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 8000);
}

setInterval(createHeart, 300);

const openBtn = document.getElementById('js-open-video');
const closeBtn = document.getElementById('js-close-video');
const modal = document.getElementById('js-video-modal');
const video = modal.querySelector('video');

openBtn.addEventListener('click', () => {
  modal.classList.remove('hidden');
  modal.classList.add('flex');

  video.play();
});

closeBtn.addEventListener('click', () => {
  modal.classList.remove('flex');
  modal.classList.add('hidden');

  video.pause();
  video.currentTime = 0;
});
