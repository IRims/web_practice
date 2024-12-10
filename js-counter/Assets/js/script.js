const counterValue = document.getElementById('counter-value');
const decreaseBtn = document.getElementById('decrease');
const resetBtn = document.getElementById('reset');
const increaseBtn = document.getElementById('increase');

let count = 0;

function updateCounter() {
    counterValue.textContent = count;

    counterValue.classList.add('grow');
    setTimeout(() => {
        counterValue.classList.remove('grow');
    }, 300);
}

decreaseBtn.addEventListener('click', () => {
    count--;
    updateCounter();
});

resetBtn.addEventListener('click', () => {
    count = 0;
    updateCounter();
});

increaseBtn.addEventListener('click', () => {
    count++;
    updateCounter();
});
