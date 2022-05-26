let apiKey = "c0d34ff35f99187b8089dbc8ea55c072";
let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=Troy,US&appid=${apiKey}&units=imperial`;

let now = new Date();

//current date
//day
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
//month
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
//date
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
