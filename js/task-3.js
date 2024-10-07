// Отримуємо посилання на елементи input та span
const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

// Прослуховуємо подію input
input.addEventListener('input', event => {
  const trimmedValue = event.target.value.trim();
  output.textContent = trimmedValue === '' ? 'Anonymous' : trimmedValue;
});
