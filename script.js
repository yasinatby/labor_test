document.addEventListener('DOMContentLoaded', () => {
    // Buttons
    const nextBtn1 = document.getElementById('next-btn-1');
    const backBtn2 = document.getElementById('back-btn-2');
    const nextBtn2 = document.getElementById('next-btn-2');
    const backBtn3 = document.getElementById('back-btn-3');

    // Steps
    const step1 = document.getElementById('step-1');
    const step2 = document.getElementById('step-2');
    const step3 = document.getElementById('step-3');

    // Progress Bar
    const progress = document.getElementById('progress');
    const steps = document.querySelectorAll('.step');

    let currentStep = 1;

    nextBtn1.addEventListener('click', () => {
        step1.classList.add('hidden');
        step2.classList.remove('hidden');
        currentStep = 2;
        updateProgress();
    });

    backBtn2.addEventListener('click', () => {
        step2.classList.add('hidden');
        step1.classList.remove('hidden');
        currentStep = 1;
        updateProgress();
    });

    nextBtn2.addEventListener('click', () => {
        step2.classList.add('hidden');
        step3.classList.remove('hidden');
        currentStep = 3;
        updateProgress();
    });

    backBtn3.addEventListener('click', () => {
        step3.classList.add('hidden');
        step2.classList.remove('hidden');
        currentStep = 2;
        updateProgress();
    });

    function updateProgress() {
        // Update progress bar width
        const progressPercentage = ((currentStep - 1) / (steps.length - 1)) * 100;
        progress.style.width = progressPercentage + '%';

        // Update step indicators
        steps.forEach(step => {
            if (parseInt(step.dataset.step) <= currentStep) {
                step.classList.add('active');
            } else {
                step.classList.remove('active');
            }
        });
    }
});