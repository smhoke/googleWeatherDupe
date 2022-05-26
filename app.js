let now = new Date();
//current day
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
//current month
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let month = months[now.getMonth()];
//current date
let date = now.getDate();

let currentDate = document.querySelector("#currentDate");
currentDate.innerHTML = `${day}, ${month} ${date}`;

//current time
let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
let currentTime = document.querySelector("#currentTime");
currentTime.innerHTML = `${hours}:${minutes}`;

//display city data on load or reload
function displayDefault(response) {
  console.log(response.data);
  let currentCityElement = document.querySelector("#currentCity");
  currentCityElement.innerHTML = response.data.name;
  let currentWeatherIconElement = document.querySelector("#currentWeatherIcon");
  currentWeatherIconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
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

  fahrenheitTemp = response.data.main.temp;
}

//search for cities and import data
function search(city) {
  let apiKey = "c0d34ff35f99187b8089dbc8ea55c072";
  let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
  axios.get(apiURL).then(displayDefault);
}

function handleSubmit(event) {
  event.preventDefault();
  let citySearchElement = document.querySelector("#citySearch");
  search(citySearchElement.value);
}

let form = document.querySelector("#form");
form.addEventListener("submit", handleSubmit);

//change Temp to C when clickng C link
fahrenheitTemp = null;
function displayCelsiusTemp(event) {
  event.preventDefault();
  let celsiusTemp = ((fahrenheitTemp - 32) * 5) / 9;
  let currentTempElement = document.querySelector("#currentTemp");
  currentTempElement.innerHTML = Math.round(celsiusTemp);
  fahrenheit.classList.remove("active");
  celsius.classList.add("active");
}
let celsius = document.querySelector("#celsius");
celsius.addEventListener("click", displayCelsiusTemp);
//change Temp to F when clickng F link
function displayFahrenheitTemp(event) {
  event.preventDefault();
  let currentTempElement = document.querySelector("#currentTemp");
  currentTempElement.innerHTML = Math.round(fahrenheitTemp);
  fahrenheit.classList.add("active");
  celsius.classList.remove("active");
}
let fahrenheit = document.querySelector("#fahrenheit");
fahrenheit.addEventListener("click", displayFahrenheitTemp);

//display NYC weather for default
search("New York");
