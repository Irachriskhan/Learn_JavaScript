// Fetch is JS built-in function to send request to an API
const url = "http://api.weatherapi.com/v1/current.json&&";
async function searchData() {
  try {
    const newRequest = new Request(url, {
      headers: {
        key: "1fec8a7bd648422790b104441233010",
        q: "Kigali",
        aqi: "yes",
      },
    });

    const data = await fetch(newRequest);
    const result = await data.json();
    console.log(result.properties);
  } catch (err) {
    console.log("Cannot access the API.", err);
  }
}

searchData();
