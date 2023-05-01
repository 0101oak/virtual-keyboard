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
rowFirst.classList.add('row_1');
keyboard.append(rowFirst);

const arrayFirst = ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '/', 'Del'];
const charFirst = [9, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 219, 221, 220, 46];
const arrayRusFirst = ['Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '/', 'Del'];

if (lang === 1) {
  for (let i = 0; i < arrayFirst.length; i++) {
    rowFirst.append(Key(arrayFirst[i], charFirst[i]));
  }
} else {
  for (let i = 0; i < arrayRusFirst.length; i++) {
    rowFirst.append(Key(arrayRusFirst[i], charFirst[i]));
  }
}

const rowSecond = document.createElement('div');
rowSecond.classList.add('row_2');
keyboard.appendChild(rowSecond);

const arraySecond = ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter'];
const charSecond = [20, 65, 83, 68, 70, 71, 72, 74, 75, 76, 186, 222, 13];
const arrayRusSecond = ['CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter'];

if (lang === 1) {
  for (let i = 0; i < arraySecond.length; i++) {
    rowSecond.append(Key(arraySecond[i], charSecond[i]));
  }
} else {
  for (let i = 0; i < arrayRusSecond.length; i++) {
    rowSecond.append(Key(arrayRusSecond[i], charSecond[i]));
  }
}

const rowThird = document.createElement('div');
rowThird.classList.add('row_3');
keyboard.appendChild(rowThird);

const arrayThird = ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '▲', 'Shift'];
const charThird = [16, 90, 88, 67, 86, 66, 78, 77, 188, 190, 191, 38, 'ShiftRight'];
const arrayRusThird = ['Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '/', '▲', 'Shift'];

if (lang === 1) {
  for (let i = 0; i < arrayThird.length; i++) {
    rowThird.append(Key(arrayThird[i], charThird[i]));
  }
} else {
  for (let i = 0; i < arrayRusThird.length; i++) {
    rowThird.append(Key(arrayRusThird[i], charThird[i]));
  }
}

const rowFourth = document.createElement('div');
rowFourth.classList.add('row_4');
keyboard.appendChild(rowFourth);

const arrayFourth = ['Ctrl', 'Win', 'Alt', '', 'Alt', '◄', '▼', '►', 'Ctrl'];
const charFourth = [17, 91, 18, 32, 'AltRight', 37, 40, 39, 'v'];

for (let i = 0; i < arrayFourth.length; i++) {
  rowFourth.append(Key(arrayFourth[i], charFourth[i]));
}

rowFourth.children[3].style.width = '300px';

keyboard.onmouseover = function (event) {
  if (event.target.classList.contains('key')) {
    event.target.style.backgroundColor = '#354a21';
  }
};

keyboard.onmouseout = function (event) {
  if (event.target.classList.contains('black')) {
    event.target.style.backgroundColor = 'black';
    event.target.style.borderRadius = '5px';
  } else if (event.target.classList.contains('key')) {
    event.target.style.backgroundColor = '#29282b';
    event.target.style.borderRadius = '5px';
  }
};

keyboard.onmousedown = function (event) {
  if (event.target.classList.contains('key')) {
    const value = event.target.innerHTML;
    console.log(value);
    if (event.target.innerHTML === 'Backscape') {
      textarea.value = textarea.value.slice(0, textarea.value.length - 1);
    } else textarea.value += value;
    event.target.style.backgroundColor = '#1d8220';
    event.target.style.borderRadius = '50%';
  }
};

keyboard.onmouseup = function (event) {
  if (event.target.classList.contains('black')) {
    event.target.style.backgroundColor = 'black';
    event.target.style.borderRadius = '5px';
  } else if (event.target.classList.contains('key')) {
    event.target.style.backgroundColor = '#354a21';
    event.target.style.borderRadius = '5px';
  }
};

let keyActive;
document.onkeydown = function (event) {
  event.preventDefault();
  keyActive = document.getElementById(event.keyCode);
  const value = keyActive.innerHTML;
  if (event.keyCode === 18 && lang == 0) {
    rowFirst.innerHTML = '';
    rowSecond.innerHTML = '';
    rowThird.innerHTML = '';
    for (let i = 0; i < 15; i++) {
      rowSecond.append(Key(arrayRusSecond[i], charSecond[i]));
    }
    // rowFirst.firstElementChild.style.width = '50px';
    // rowFirst.firstElementChild.style.backgroundColor = 'black';
    // rowFirst.lastElementChild.style.backgroundColor = 'black';
    // rowFirst.lastElementChild.style.width = '44px';
    // rowFirst.firstElementChild.classList.add('black');
    // rowFirst.lastElementChild.classList.add('black');
    for (let i = 0; i < 13; i++) {
      rowThird.append(Key(arrayRusThird[i], charThird[i]));
    }

    // rowSecond.firstElementChild.style.width = '100px';
    // rowSecond.firstElementChild.style.backgroundColor = 'black';
    // rowSecond.lastElementChild.style.backgroundColor = 'black';
    // rowSecond.lastElementChild.style.width = '86px';
    // rowSecond.firstElementChild.classList.add('black');
    // rowSecond.lastElementChild.classList.add('black');
    for (let i = 0; i < 13; i++) {
      rowFourth.append(Key(arrayFourth[i], charFourth[i]));
    }

    // rowThird.firstElementChild.style.width = '100px';
    // rowThird.firstElementChild.style.backgroundColor = 'black';
    // rowThird.lastElementChild.style.backgroundColor = 'black';
    // rowThird.lastElementChild.previousElementSibling.style.backgroundColor = 'black';
    // rowThird.lastElementChild.previousElementSibling.classList.add('black');
    // rowThird.firstElementChild.style.backgroundColor = 'black';
    // rowThird.lastElementChild.classList.add('black');
    // rowThird.firstElementChild.classList.add('black');
    // rowThird.lastElementChild.style.width = '86px';

    lang = 1;
  } else if (event.keyCode === 18 && lang === 1) {
    rowFirst.innerHTML = '';
    rowSecond.innerHTML = '';
    rowThird.innerHTML = '';
    for (let i = 0; i < 15; i++) {
      rowSecond.append(Key(arraySecond[i], charSecond[i]));
    }
    // rowFirst.firstElementChild.style.width = '50px';
    // rowFirst.firstElementChild.style.backgroundColor = 'black';
    // rowFirst.lastElementChild.style.backgroundColor = 'black';
    // rowFirst.lastElementChild.style.width = '44px';
    // rowFirst.firstElementChild.classList.add('black');
    // rowFirst.lastElementChild.classList.add('black');
    for (let i = 0; i < 13; i++) {
      rowThird.append(Key(arrayThird[i], charThird[i]));
    }

    rowSecond.firstElementChild.style.width = '100px';
    rowSecond.firstElementChild.style.backgroundColor = 'black';
    rowSecond.lastElementChild.style.backgroundColor = 'black';
    rowSecond.lastElementChild.style.width = '86px';
    rowSecond.firstElementChild.classList.add('black');
    rowSecond.lastElementChild.classList.add('black');
    for (let i = 0; i < 13; i++) {
      rowThird.append(Key(arrayThird[i], charThird[i]));
    }

    // rowThird.firstElementChild.style.width = '100px';
    // rowThird.firstElementChild.style.backgroundColor = 'black';
    // rowThird.lastElementChild.style.backgroundColor = 'black';
    // rowThird.lastElementChild.previousElementSibling.style.backgroundColor = 'black';
    // rowThird.lastElementChild.previousElementSibling.classList.add('black');
    // rowThird.firstElementChild.style.backgroundColor = 'black';
    // rowThird.lastElementChild.classList.add('black');
    // rowThird.firstElementChild.classList.add('black');
    // rowThird.lastElementChild.style.width = '86px';
    lang = 0;
  }

  if (event.code === 'ShiftRight') {
    keyActive = document.getElementById('ShiftRight');
  }
  if (event.code === 'ControlRight') {
    keyActive = document.getElementById('ControlRight');
  }
  if (event.code === 'AltRight') {
    keyActive = document.getElementById('AltRight');
  }
  if (value === 'Backscape') {
    output.value = output.value.slice(0, output.value.length - 1);
  } else if (event.keyCode !== 18 && event.keyCode !== 17
        && event.keyCode !== 91 && event.keyCode !== 16
        && event.keyCode !== 20 && event.keyCode !== 13
        && event.keyCode !== 46 && event.keyCode !== 9) output.value += value;
  keyActive.style.backgroundColor = '#1d8220';
  keyActive.style.borderRadius = '50%';
};

document.onkeyup = function (event) {
  event.preventDefault();
  if (keyActive.classList.contains('black')) {
    keyActive.style.backgroundColor = 'black';
    keyActive.style.borderRadius = '5px';
  } else if (keyActive.classList.contains('key')) {
    keyActive.style.backgroundColor = '#29282b';
    keyActive.style.borderRadius = '5px';
  }
};
