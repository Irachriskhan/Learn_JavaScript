// Promise Maker
function getWeather() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("rainny");
    }, 100);
  });
}

function getWeatherIcon(weather) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (weather == "sunny") {
        resolve("☀️☀️☀️☀️☀️☀️");
      } else if (weather == "cloudy") {
        resolve("⛅⛅⛅⛅⛅");
      } else if (weather == "rainny") {
        resolve("☂️☂️☂️☂️☂️");
      } else {
        reject("No Icon found!!");
      }
    }, 100);
  });
}

function onSuccess(data) {
  console.log(`The weather is ${data}`);
}

function onError(data) {
  console.log(`Error: ${data}`);
}

// Promise Receiver
getWeather().then(getWeatherIcon).then(onSuccess, onError);
