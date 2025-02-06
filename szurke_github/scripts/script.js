document.addEventListener("DOMContentLoaded", function() {
    const p = document.getElementById("text");
    const fullText = p.textContent;    
    p.textContent = "";
    let index = 0;
    
    function addCharacter() {
        if (index < fullText.length) {
            p.textContent += fullText[index];
            index++;
            setTimeout(addCharacter, 27); //A kiírás sebessége itt változtatható
        }
        else{
            setTimeout(() => {
                p.textContent ="";
                index = 0;
                addCharacter();
            },1000);
        }
    }
    addCharacter();
});

let timerDisplay = document.getElementById("timer");
let startButton = document.getElementById("start");
let stopButton = document.getElementById("stop");
let resetButton = document.getElementById("reset");

let startTime = 0;
let elapsedTime = 0;
let timerInterval;

// Formázás (óra:perc:másodperc)
function formatTime(ms) {
  let totalSeconds = Math.floor(ms / 1000);
  let hours = Math.floor(totalSeconds / 3600);
  let minutes = Math.floor((totalSeconds % 3600) / 60);
  let seconds = totalSeconds % 60;

  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

// Időzítő frissítése
function updateTimer() {
  elapsedTime = Date.now() - startTime;
  timerDisplay.textContent = formatTime(elapsedTime);
}

// Start gomb
startButton.addEventListener("click", () => {
  if (!timerInterval) {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(updateTimer, 100);
  }
});

// Stop gomb
stopButton.addEventListener("click", () => {
  clearInterval(timerInterval);
  timerInterval = null;
});

// Reset gomb
resetButton.addEventListener("click", () => {
  clearInterval(timerInterval);
  timerInterval = null;
  elapsedTime = 0;
  timerDisplay.textContent = "00:00:00";
});
