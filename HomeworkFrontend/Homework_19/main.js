// Находим элементы формы и места для результата
const form = document.querySelector('#name-form');
const resultDiv = document.querySelector('#result');

// Слушаем отправку формы
form.addEventListener('submit', async (event) => {
  event.preventDefault(); // Отменяем перезагрузку страницы

  const name = event.target.name.value; // Получаем введенное имя
  resultDiv.textContent = 'Загрузка...'; // Показываем сообщение, пока загружается

  try {
    // Отправляем запрос на API с введенным именем
    const res = await fetch(`https://api.genderize.io/?name=${name}`);
    const data = await res.json();

    // Если API вернул пол, выводим его
    if (data.gender) {
      resultDiv.innerHTML = `
        Имя: ${data.name} <br>
        Пол: ${data.gender} <br>
        Вероятность: ${(data.probability * 100).toFixed(2)}%
      `;
    } else {
      resultDiv.textContent = 'Пол не определен для этого имени.';
    }
  } catch (error) {
    resultDiv.textContent = 'Ошибка при запросе данных.';
  }
});

