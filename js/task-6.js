const controls = document.querySelector('#controls');
const input = controls.querySelector('input');
const createBtn = controls.querySelector('[data-create]');
const destroyBtn = controls.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');

// Функція для створення колекції
function createBoxes(amount) {
  const elements = [];
  let size = 30;
  
  for (let i = 0; i < amount; i++) {
    const div = document.createElement('div');
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = getRandomHexColor();
    elements.push(div);
    size += 10;
  }
  
  boxes.append(...elements);
}

// Функція для очищення колекції
function destroyBoxes() {
  boxes.innerHTML = '';
}

// Обробники подій
createBtn.addEventListener('click', () => {
  const amount = parseInt(input.value);
  if (amount >= 1 && amount <= 100) {
    destroyBoxes(); // Очищуємо попередні елементи
    createBoxes(amount);
  }
});

destroyBtn.addEventListener('click', destroyBoxes);
