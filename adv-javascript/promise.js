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
// getWeather().then(getWeatherIcon).then(onSuccess, onError);

// work the same as the previous
// We use the catch() to catch the errors outside the then()
// When there is an error, the process will jump to the catch()
getWeather().then(getWeatherIcon).then(onSuccess).catch(onError);

// ERROR HANDLING with catch() and finally()
//  when there is an error or not, the finally() is executed
// The finally() is used to mark the end of the process
function fun1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("404");
    }, 1000);
  });
}

function fun2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("😀");
    }, 1000);
  });
}

function onSucceded(data) {
  console.log(data);
}

function onErrored(errorCode) {
  console.log(`ERROR : ${errorCode}`);
}

function onFinnally() {
  console.log("You reached the end!!!!");
}

fun1().then(fun2).then(onSucceded).catch(onErrored).finally(onFinnally);

// The fectc() is used when calling the API
