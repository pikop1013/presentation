const slides = Array.from(document.querySelectorAll('.slide'));
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const counter = document.getElementById('counter');
const slideTitle = document.getElementById('slide-title');

let current = 0;

function render() {
  slides.forEach((slide, index) => {
    slide.classList.toggle('is-active', index === current);
  });

  const currentSlide = slides[current];
  slideTitle.textContent = currentSlide.dataset.title || `スライド ${current + 1}`;
  counter.textContent = `${current + 1} / ${slides.length}`;
}

function move(step) {
  const nextIndex = current + step;

  if (nextIndex < 0 || nextIndex >= slides.length) {
    return;
  }

  current = nextIndex;
  render();
}

prevButton.addEventListener('click', () => move(-1));
nextButton.addEventListener('click', () => move(1));

document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowRight' || event.key === 'PageDown') {
    move(1);
  }

  if (event.key === 'ArrowLeft' || event.key === 'PageUp') {
    move(-1);
  }
});

render();
