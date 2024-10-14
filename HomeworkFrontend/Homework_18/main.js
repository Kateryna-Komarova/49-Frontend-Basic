const factParagraph = document.querySelector("#cat-fact");
const catImage = document.querySelector("#cat-image");
const newCatButton = document.querySelector("#new-cat-btn");

async function updateCatInfo() {
  try {
    const factResponse = await fetch("https://catfact.ninja/fact");

    if (!factResponse.ok) throw new Error("Ошибка получения факта о кошках");
    const factData = await factResponse.json();
    factParagraph.textContent = factData.fact;

    const imageResponse = await fetch(
      "https://api.thecatapi.com/v1/images/search"
    );
    if (!imageResponse.ok)
      throw new Error("Ошибка получения изображения кошки");
    const imageData = await imageResponse.json();
    catImage.src = imageData[0].url;
  } catch (error) {
    console.error(error);
    console.error(error);
    factParagraph.textContent =
      "Не удалось загрузить данные. Попробуйте снова.";
  }
}
newCatButton.addEventListener("click", updateCatInfo);

updateCatInfo();
