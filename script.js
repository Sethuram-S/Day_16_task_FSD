// Get the HTML element to display the countdown
const countdownElement = document.getElementById('countdown');

// Function to display the countdown
(() => {
  let seconds = 10;

  // Initial countdown display
  countdownElement.textContent = seconds;

  // Callback hell implementation
  setTimeout(() => {
    seconds -= 1;
    countdownElement.textContent = seconds;
    setTimeout(() => {
      seconds -= 1;
      countdownElement.textContent = seconds;
      setTimeout(() => {
        seconds -= 1;
        countdownElement.textContent = seconds;
        setTimeout(() => {
          seconds -= 1;
          countdownElement.textContent = seconds;
          setTimeout(() => {
            seconds -= 1;
            countdownElement.textContent = seconds;
            setTimeout(() => {
              seconds -= 1;
              countdownElement.textContent = seconds;
              setTimeout(() => {
                countdownElement.textContent = 'Happy Independence Day!';
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
})();