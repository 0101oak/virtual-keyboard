import './styles.css';

const keyboardWrapper = document.createElement('div');
keyboardWrapper.classList.add('keyboard-wrapper');

const output = document.createElement('textarea');
output.classList.add('output');

const keyboard = document.createElement('div');
keyboard.classList.add('keyboard');

const text = document.createElement('p');
text.classList.add('text');
text.innerHTML = 'Для переключения языка нажмите Ctrl Left + Alt Left';

keyboardWrapper.appendChild(output);
keyboardWrapper.appendChild(keyboard);
keyboardWrapper.appendChild(text);
document.body.appendChild(keyboardWrapper);

function Key(value, id) {
  const key = document.createElement('div');
  key.innerHTML = value;
  key.id = id;
  key.classList.add('key');
  return key;
}

const row = document.createElement('div');
row.classList.add('row');
keyboard.appendChild(row);

const array = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backscape'];
const char = [192, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 189, 187, 8];

for (let i = 0; i < 14; i++) {
  row.append(Key(array[i], char[i]));
}
