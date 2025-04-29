// main.js

// Smooth scrolling for nav links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
      if (this.hash !== "") {
        e.preventDefault();
        const hash = this.hash;
        document.querySelector(hash).scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Timer Functionality
  let startTime;
  function startTimer() {
    startTime = Date.now();
    setInterval(updateTimer, 1000);
  }
  
  function updateTimer() {
    const timerElement = document.getElementById('timer');
    if (timerElement) {
      const elapsed = Math.floor((Date.now() - startTime) / 1000);
      timerElement.textContent = `Time: ${elapsed} seconds ⏳`;
    }
  }
  
  // Start the timer automatically if timer element is present
  document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('timer')) {
      startTimer();
    }
  });
  