const apiKey = "96fe756cb3a8ee4014fceef036cdf8b9";
// const city = "butwal";

const weather = document.querySelector(".weather");

async function weatherData(city) {
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
    );

    const data = await res.json();
    console.log(data);

    updateWeather(data);
  } catch (error) {
    weather.innerHTML = `<h1>NO DATA FOUND..</h1>`;
    updateWeather(data);
  }
}

const place = document.querySelector(".place");
const temp = document.querySelector(".temp");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");
const date = document.querySelector(".date");

const dataImage = document.querySelector(".data-image");

function updateWeather(data) {
  place.textContent = data.name;
  temp.textContent = `${Math.round(data.main.temp)}°C`;
  humidity.textContent = `${data.main.humidity} %`;
  wind.textContent = `${data.wind.speed} km/h`;

  const currentDate = new Date();
  date.textContent = currentDate.toDateString();

  if (data.weather[0].main == "Clouds") {
    dataImage.src = "images/clouds.png";
  } else if (data.weather[0].main == "Clear") {
    dataImage.src = "images/clear.png";
  } else if (data.weather[0].main == "Rain") {
    dataImage.src = "images/rain.png";
  } else if (data.weather[0].main == "Drizzle") {
    dataImage.src = "images/drizzle.png";
  } else if (data.weather[0].main == "Mist") {
    dataImage.src = "images/mist.png";
  }
}

const search = document.querySelector(".search");
const input = document.querySelector("#input");

search.addEventListener("submit", function (e) {
  e.preventDefault();
  const city = input.value;
  if (city !== "") {
    weatherData(city);
    input.value = "";
  }
});
