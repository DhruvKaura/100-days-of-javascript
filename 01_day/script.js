// Select DOM elements
const value = document.getElementById('value');
const increase = document.getElementById('increase');
const decrease = document.getElementById('decrease');
const reset = document.getElementById('reset');

let count = 0;

// Increase count
increase.addEventListener('click', () => {
  count++;
  updateValue();
});

// Decrease count
decrease.addEventListener('click', () => {
  count--;
  updateValue();
});

// Reset count
reset.addEventListener('click', () => {
  count = 0;
  updateValue();
});

// Update UI
function updateValue() {
  value.textContent = count;

  if (count > 0) {
    value.style.color = 'green';
  } else if (count < 0) {
    value.style.color = 'red';
  } else {
    value.style.color = '#333';
  }
}
