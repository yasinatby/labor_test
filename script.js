// Script für Schritt-Navigation und Fortschrittsanzeige

const steps = document.querySelectorAll('.step');
const progress = document.getElementById('progress');

const step1 = document.getElementById('step-1');
const step2 = document.getElementById('step-2');
const step3 = document.getElementById('step-3');

const next1 = document.getElementById('next-btn-1');
const next2 = document.getElementById('next-btn-2');
const back2 = document.getElementById('back-btn-2');
const back3 = document.getElementById('back-btn-3');

function updateProgress(step) {
  steps.forEach((s, i) => {
    s.classList.toggle('active', i < step);
  });
  progress.style.width = ((step - 1) / (steps.length - 1)) * 100 + '%';
}

next1.addEventListener('click', () => {
  step1.classList.add('hidden');
  step2.classList.remove('hidden');
  updateProgress(2);
});

next2.addEventListener('click', () => {
  step2.classList.add('hidden');
  step3.classList.remove('hidden');
  updateProgress(3);
});

back2.addEventListener('click', () => {
  step2.classList.add('hidden');
  step1.classList.remove('hidden');
  updateProgress(1);
});

back3.addEventListener('click', () => {
  step3.classList.add('hidden');
  step2.classList.remove('hidden');
  updateProgress(2);
});
