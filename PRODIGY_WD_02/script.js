let timer;
let startTime;
let elapsedTime = 0;
let isRunning = false;
let lapCount = 1;

const display = document.getElementById('display');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');
const lapBtn = document.getElementById('lapBtn');
const lapTimesList = document.getElementById('lapTimes');

function formatTime(milliseconds) {
  let date = new Date(milliseconds);
  let hours = date.getUTCHours().toString().padStart(2, '0');
  let minutes = date.getMinutes().toString().padStart(2, '0');
  let seconds = date.getSeconds().toString().padStart(2, '0');
  return `${hours}:${minutes}:${seconds}`;
}

function startTimer() {
  if (!isRunning) {
    isRunning = true;
    startTime = Date.now() - elapsedTime;
    timer = setInterval(function() {
      elapsedTime = Date.now() - startTime;
      display.textContent = formatTime(elapsedTime);
    }, 1000);
    startBtn.textContent = 'Pause';
  } else {
    clearInterval(timer);
    isRunning = false;
    startBtn.textContent = 'Resume';
  }
}

function stopTimer() {
  clearInterval(timer);
  isRunning = false;
  startBtn.textContent = 'Start';
}

function resetTimer() {
  clearInterval(timer);
  clearInterval(lapCount);
  isRunning = false;
  elapsedTime = 0;
  display.textContent = '00:00:00';
  display.lapCount = '0';
  startBtn.textContent = 'Start';
}

function recordLapTime() {
    if (isRunning) {
      let lapTime = formatTime(elapsedTime);
      let lapItem = document.createElement('li');
      lapItem.textContent = `Lap ${lapCount}: ${lapTime}`;
      lapTimesList.appendChild(lapItem);
      lapCount++;
    }
  }
  

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);
lapBtn.addEventListener('click', recordLapTime);