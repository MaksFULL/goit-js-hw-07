// Отримуємо всі елементи li з класом item
const categories = document.querySelectorAll('#categories .item');

// Виводимо кількість категорій
console.log('Number of categories:', categories.length);

// Проходимо по кожній категорії
categories.forEach(category => {
  // Отримуємо заголовок категорії
  const categoryTitle = category.querySelector('h2').textContent;
  
  // Отримуємо кількість елементів у категорії
  const elementsCount = category.querySelectorAll('li').length;
  
  // Виводимо інформацію в консоль
  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${elementsCount}`);
});
