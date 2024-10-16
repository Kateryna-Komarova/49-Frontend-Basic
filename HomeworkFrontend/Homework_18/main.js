const factParagraph = document.querySelector("#cat-fact");
const catImage = document.querySelector("#cat-image");
const newCatButton = document.querySelector("#new-cat-btn");
const contentContainer = document.querySelector("#content-container");
const loader = document.querySelector("#loader");

async function updateCatInfo() {
  // Показываем лоадер и скрываем контейнер с данными
  loader.style.display = "block";
  contentContainer.style.display = "none";

  try {
    // Отправляем оба запроса параллельно
    const [factResponse, imageResponse] = await Promise.all([
      fetch("https://catfact.ninja/fact"),
      fetch("https://api.thecatapi.com/v1/images/search")
    ]);

    // Проверяем на ошибки
    if (!factResponse.ok) throw new Error("Ошибка получения факта о кошках");
    if (!imageResponse.ok) throw new Error("Ошибка получения изображения кошки");

    // Получаем данные
    const factData = await factResponse.json();
    const imageData = await imageResponse.json();

    // Обновляем содержимое
    factParagraph.textContent = factData.fact;
    catImage.src = imageData[0].url;

    // После загрузки всех данных скрываем лоадер и показываем контент
    loader.style.display = "none";
    contentContainer.style.display = "block";
  } catch (error) {
    console.error(error);
    factParagraph.textContent = "Не удалось загрузить данные. Попробуйте снова.";
    loader.style.display = "none"; // Скрываем лоадер при ошибке
  }
}

// Добавляем обработчик события для кнопки
newCatButton.addEventListener("click", updateCatInfo);

// Первоначальная загрузка данных
updateCatInfo();


