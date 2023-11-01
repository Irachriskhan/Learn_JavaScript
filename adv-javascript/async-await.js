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
// use fetch() together with async await

async function searchData() {
  try {
    const data = await fetch(
      "http://api.weatherapi.com/v1/current.json?key=1fec8a7bd648422790b104441233010&q=Kigali&aqi=yes"
    );
    const result = await data.json();
    console.log(result.properties);
  } catch (err) {
    console.log(err, "Cannot access the API.");
  }
}

searchData();

// NOTE
// 1. Async and await must be used together. Exceptions: JS Modules and Chrome DevTools Console
// 2. async / await only affects Promise receiver
// 3. You can use await in any function that returns a Promise
// 4. Any function can be converted to async
// Example:
const me = {
  // sayHello(){
  async sayHello() {
    return `I am Chris.`;
  },
};

me.sayHello(); // Promise { `I am Chris.`}
// 5. All async functions
// 6. Error handleling with try/catch
