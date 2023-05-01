import './styles.css';

const lang = 0;

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

for (let i = 0; i < array.length; i++) {
  row.append(Key(array[i], char[i]));
}

const rowFirst = document.createElement('div');
row.classList.add('row_1');
keyboard.appendChild(rowFirst);

const arrayFirst = ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\/', 'Del'];
const charFirst = [9, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 219, 221, 220, 46];
const arrayRusFirst = ['Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\/', 'Del'];

if (lang === 1) {
  for (let i = 0; i < arrayFirst.length; i++) {
    rowFirst.append(Key(arrayFirst[i], charFirst[i]));
  }
} else {
  for (let i = 0; i < arrayRusFirst.length; i++) {
    rowFirst.append(Key(arrayRusFirst[i], charFirst[i]));
  }
}
