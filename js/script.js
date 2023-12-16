const letters = [
  { letter: 'C', image: 'img/C-Major.svg' },
  { letter: 'A', image: 'img/A-Major.svg' },
  { letter: 'G', image: 'img/G-Major.svg' },
  { letter: 'E', image: 'img/E-Major.svg' },
  { letter: 'D', image: 'img/D-Major.svg' }
];
const letterElement = document.getElementById('letter');
const imageElement = document.getElementById('image');
const playStopButton = document.getElementById('playStopButton');
let intervalId;
let previousIndex; // Variable pour stocker l'index de la lettre précédente

function displayLetter() {
  let randomIndex;
  
  do {
    randomIndex = Math.floor(Math.random() * letters.length);
  } while (randomIndex === previousIndex); // Continue à générer un nouvel index tant qu'il est égal à l'index précédent
  
  previousIndex = randomIndex; // Met à jour l'index précédent
  
  const currentLetter = letters[randomIndex];
  letterElement.textContent = currentLetter.letter;
  imageElement.src = currentLetter.image;
}


function togglePlayStop() {
  if (intervalId) {
    stop();
  } else {
    play();
  }
}

function play() {
  const tempoInput = document.getElementById('tempo');
  const timePerMeasureInput = document.getElementById('timePerMeasure');
  const measuresInput = document.getElementById('measures');
  const tempo = parseInt(tempoInput.value);
  const timePerMeasure = parseInt(timePerMeasureInput.value);
  const measures = parseInt(measuresInput.value);
  const noteDuration = 60000 / tempo; // Durée d'une noire en millisecondes
  const totalDuration = timePerMeasure * measures;
  const intervalTime = noteDuration * totalDuration;

  function playNextLetter() {
    displayLetter();
    intervalId = setTimeout(playNextLetter, intervalTime);
  }

  playNextLetter();

  playStopButton.textContent = 'Stop';
  playStopButton.style.backgroundColor = 'red';
}

function stop() {
  clearTimeout(intervalId);
  intervalId = null;
  playStopButton.textContent = 'Play';
  playStopButton.style.backgroundColor = '';
}

playStopButton.addEventListener('click', togglePlayStop);
