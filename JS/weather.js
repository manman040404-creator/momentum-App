const API_KEY = "3025d9c5666434aed56c03889456f248"

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url)
      .then(response => response.json())
      .then((data) => {
    const weather = document.querySelector("#weather span:first-child");
    const city = document.querySelector("#weather span:last-child");

    const weatherMain = data.weather[0].main;
    let icon = "";

    if (weatherMain === "Clear") {
    icon = "☀️";
    } else if (weatherMain === "Clouds") {
    icon = "☁️";
    } else if (weatherMain === "Rain") {
    icon = "🌧️";
    } else if (weatherMain === "Snow") {
    icon = "❄️";
    } else if (weatherMain === "Thunderstorm") {
    icon = "⛈️";
    } else {
    icon = "🌤️";
    }

  city.innerText = data.name;
  const temp = Math.round(data.main.temp);
  weather.innerText = `${icon} ${weatherMain} / ${temp}℃ /`;
  });
}
function onGeoError() {
    alert("Can't find you. No weather foe you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

