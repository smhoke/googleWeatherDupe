let apiKey = "c0d34ff35f99187b8089dbc8ea55c072";
let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=Troy,US&appid=${apiKey}&units=imperial`;

function displayDefault(response) {
  console.log(response.data);
  let currentCityElement = document.querySelector("#currentCity");
  currentCityElement.innerHTML = response.data.name;
  let currentTempElement = document.querySelector("#currentTemp");
  currentTempElement.innerHTML = Math.round(response.data.main.temp);
  let currentConditionElement = document.querySelector("#currentCondition");
  currentConditionElement.innerHTML = response.data.weather[0].description;
  let feelsLikeElement = document.querySelector("#feelsLike");
  feelsLikeElement.innerHTML = Math.round(response.data.main.feels_like);
  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = response.data.main.humidity;
  let windElement = document.querySelector("#wind");
  windElement.innerHTML = Math.round(response.data.wind.speed);
}

axios.get(apiURL).then(displayDefault);
