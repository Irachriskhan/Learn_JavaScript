// Promise Maker
function getWeather() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      reject("Error");
    });
  });
}

// Promise Receiver
let promise = getWeather();
console.log(promise);
