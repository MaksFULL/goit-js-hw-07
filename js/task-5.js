// Функція для генерації випадкового кольору
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }
  
  const changeColorButton = document.querySelector('.change-color');
  const colorSpan = document.querySelector('.color');
  
  changeColorButton.addEventListener('click', () => {
    const randomColor = getRandomHexColor();
    
    // Змінюємо колір фону body
    document.body.style.backgroundColor = randomColor;
    
    // Відображаємо колір у span
    colorSpan.textContent = randomColor;
  });
  