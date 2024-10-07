const form = document.querySelector('.login-form');

form.addEventListener('submit', event => {
  event.preventDefault(); // Запобігаємо перезавантаженню сторінки

  const { email, password } = event.currentTarget.elements;
  
  // Перевіряємо, чи заповнені поля
  if (!email.value.trim() || !password.value.trim()) {
    alert('All form fields must be filled in');
    return;
  }

  // Створюємо об'єкт з даними
  const formData = {
    email: email.value.trim(),
    password: password.value.trim()
  };

  console.log(formData);
  
  // Очищуємо форму
  form.reset();
});
