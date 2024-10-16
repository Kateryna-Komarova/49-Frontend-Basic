const dateText = document.querySelector("#today");
const cityText = document.querySelector(".city-text");
const weatherText = document.querySelector("#weather");
const temperature = document.querySelector(".temperature-now-text");
const iconBig = document.querySelector("#icon-big");

async function nikitaWeather() {
  const res = await fetch("http://api.weatherapi.com/v1/current.json?key=e4b09edc0aae4a3cb7782230241610&q=Görlitz&aqi=no");
  const data = await res.json();

  const icon = data.current.condition.icon;

  cityText.textContent = data.location.name;
  temperature.textContent = data.current.temp_c;
  weatherText.textContent = data.current.condition.text;
  iconBig.setAttribute("src", `https:${icon}`);

  const today = new Date();

  const formattedDate = today.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
  dateText.textContent = formattedDate;
}
nikitaWeather();
