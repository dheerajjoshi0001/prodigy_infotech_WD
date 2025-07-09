 
    let startTime, updatedTime, difference, timerInterval;
    let running = false;
    let laps = [];

    function updateDisplay() {
      const currentTime = new Date().getTime();
      difference = currentTime - startTime;

      const hours = Math.floor(difference / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      document.getElementById('display').textContent =
        `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }

    function startStopwatch() {
      if (!running) {
        startTime = new Date().getTime() - (difference || 0);
        timerInterval = setInterval(updateDisplay, 1000);
        running = true;
      }
    }

    function pauseStopwatch() {
      clearInterval(timerInterval);
      running = false;
    }

    function resetStopwatch() {
      clearInterval(timerInterval);
      running = false;
      difference = 0;
      document.getElementById('display').textContent = '00:00:00';
      document.getElementById('laps').innerHTML = '';
      laps = [];
    }

    function recordLap() {
      if (running) {
        laps.push(document.getElementById('display').textContent);
        const lapContainer = document.getElementById('laps');
        lapContainer.innerHTML = laps.map((lap, i) => `<p>Lap ${i + 1}: ${lap}</p>`).join('');
      }
    }
  