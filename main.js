// get all keys
const keys = document.querySelectorAll('.key');

function playNote(event) {

  const audioKeyCode = getKeyCode(event);

  pressedKey(audioKeyCode);
  playAudio(audioKeyCode);
}

function getKeyCode(event) {
  let keyCode;

  event.type === 'keydown' ? keyCode = event.keyCode : keyCode = event.target.dataset.key;

  return keyCode;
}

function pressedKey(audioKeyCode) {
  const key = document.querySelector(`.key[data-key='${audioKeyCode}']`);

  // if key dont existis
  if (!key) return;

  keyDownPianoStyle(key);
  return key;
};

function keyDownPianoStyle(key) {
  key.classList.add('playing');
};

function keyUpPianoStyle(event) {
  event.target.classList.remove('playing');
}

function playAudio(audioKeyCode) {
  const audio = document.querySelector(`audio[data-key='${audioKeyCode}']`);
  audio.currentTime = 0;
  audio.play();
};

function registerEvents() {
  // mouse click
  keys.forEach(function (key) {
    key.addEventListener('click', playNote);
    key.addEventListener('transitionend', keyUpPianoStyle);
  });
  
  // keyboard press
  window.addEventListener('keydown', playNote);
};

window.addEventListener('load', registerEvents);

