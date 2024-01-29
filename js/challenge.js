JAVASCRIPT


document.addEventListener('DOMContentLoaded'), () => {
  let counter = 0;
  const counterDisplay = document.getElementById('counter');

  // Function to update the counter display
  function updateDisplay() {
    counterDisplay.textContent = counter;
  }

  // Start the timer on page load
  const timer = setInterval(() => {
    counter++;
    updateDisplay();
  }, 1000);

  // Plus button functionality
  const plusButton = document.getElementById('plus');
  plusButton.addEventListener('click', () => {
    counter++;
    updateDisplay();
  });

  // Minus button functionality
  const minusButton = document.getElementById('minus');
  minusButton.addEventListener('click', () => {
    counter--;
    updateDisplay();
  });
}