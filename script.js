const imageContainerEl = document.querySelector('.image-container');
const prevEl = document.querySelector('#prev');
const nextEl = document.querySelector('#next');
let x = 0;
let timer;

prevEl.addEventListener('click', () => {
  x = x - 45; // consistent rotation direction
  clearTimeout(timer);
  updateGallery();
});

nextEl.addEventListener('click', () => {
  x = x + 45;
  clearTimeout(timer);
  updateGallery();
});

function updateGallery() {
  imageContainerEl.style.transform = `
    perspective(1000px) rotateY(${x}deg)
  `;
  timer = setTimeout(() => {
    x = x - 45;
    if (x < -360) x = 0;
    updateGallery();
  }, 3000);
}

updateGallery();

window.addEventListener('unload', () => {
  clearTimeout(timer);
});
