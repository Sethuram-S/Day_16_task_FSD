// Get the HTML element to display the countdown
const countdownElement = document.getElementById('countdown');

// Function to display the countdown
(() => {
  let seconds = 10;

  // Initial countdown display
  countdownElement.textContent = seconds;

  // Recursive countdown
  const updateCountdown = () => {
    countdownElement.textContent = seconds;
    seconds -= 1;
    if (seconds >= 0) {
      setTimeout(updateCountdown, 1000);
    } else {
      countdownElement.textContent = 'Happy Independence Day!';
    }
  };

  updateCountdown();
})();
