// Getter functions are meant to simply return (get) the value of an object's private variable to the user
// without the user directly accessing the private variable.

// Setter functions are meant to modify (set) the value of an object's private variable based on the value
// passed into the setter function. This change could involve calculations, or even overwriting the previous
// value completely.

class Book {
  constructor(author) {
    this._author = author;
  }
  // getter
  get writer() {
    return this._author;
  }
  // setter
  set writer(updatedAuthor) {
    this._author = updatedAuthor;
  }
}
const novel = new Book("anonymous");
console.log(novel.writer);
novel.writer = "newAuthor";
console.log(novel.writer);

// CHALLNGE
// Use the class keyword to create a Thermostat class. The constructor accepts a Fahrenheit temperature.

// In the class, create a getter to obtain the temperature in Celsius and a setter that accepts a
// temperature in Celsius.

// Remember that C = 5/9 * (F - 32) and F = C * 9.0 / 5 + 32, where F is the value of temperature
// in Fahrenheit, and C is the value of the same temperature in Celsius.

// Only change code below this line
class Thermostat {
  constructor(F) {
    this.c = (5 / 9) * (F - 32);
  }

  // Getter
  get temperature() {
    return this.c;
  }

  set temperature(F) {
    return (this.c = F);
  }
}
// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
console.log(temp);
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
console.log(temp);
