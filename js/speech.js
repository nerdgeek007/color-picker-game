import { handleResult } from './handlers';
import { colorsByLength, isDark } from './colors';

const colorsDiv = document.querySelector('.colors');

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.continuous = true;
recognition.onresult = handleResult;

function displayColors(colors) {
  return colors
    .map(
      color =>
        `<span class="color ${
          isDark(color) ? 'dark' : ''
        } ${color}" style="background-color:${color}">${color}</span>`
    )
    .join('');
}

function start() {
  // see if browsers support speech recognition
  if (!('SpeechRecognition' in window)) {
    console.log('Sorry your browser does not support speech reco.');
    return;
  }
  console.log('Starting...');
}
start();
colorsDiv.innerHTML = displayColors(colorsByLength);
recognition.start();
