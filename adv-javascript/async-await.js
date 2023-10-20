// This is a promise

function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`${200} : Success`); //reject(`${404} Error`) // Error
    }, 1);
  });
}

// When  we access a promise without then()
// const result = getData();
// console.log(result); // Promise { <pending> }

// When accessing a promise by using then() and catch() methods
getData()
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

//   Accessing a promise by using async - await key-words

// We need async-await methods to reduce the number of lines of code that we use in a promise
// Note that await cannot exist without
// await is only valid in async functions and the top level bodies of modules

async function start() {
  const result = await getData(); // js wait getData to resolve then assign the value to result
  console.log(result);
}

start();

// =============================================================================
// se fetch() together with async await

async function searchData() {
  const data = await fetch(
    "https://api.weather.gov/gridpoints/OKX/35,35/forecast"
  );
  const result = await data.json();
  console.log(result.properties);
}

searchData();
