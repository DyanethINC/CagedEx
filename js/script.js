const letters = [
  { letter: 'C', majorImage: 'img/C-Major.svg', minorImage: 'img/C-Minor.svg' },
  { letter: 'A', majorImage: 'img/A-Major.svg', minorImage: 'img/A-Minor.svg' },
  { letter: 'G', majorImage: 'img/G-Major.svg', minorImage: 'img/G-Minor.svg' },
  { letter: 'E', majorImage: 'img/E-Major.svg', minorImage: 'img/E-Minor.svg' },
  { letter: 'D', majorImage: 'img/D-Major.svg', minorImage: 'img/D-Minor.svg' }
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
  } while (randomIndex === previousIndex);

  previousIndex = randomIndex;

  const currentLetter = letters[randomIndex];
  letterElement.textContent = currentLetter.letter;

  const chordType = document.getElementById('chordType').value;
  if (chordType === 'major') {
    imageElement.src = currentLetter.majorImage;
  } else if (chordType === 'minor') {
    imageElement.src = currentLetter.minorImage;
  }
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
