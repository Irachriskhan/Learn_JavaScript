// A constructor function is a function that creates an OBjECT as a fuctory function but doesnot return it
// they use the kewords: new and this
// Constructors create a blueprint to create an Object
// They start with a capital letter as class names

function Person(name) {
  this.name = name;
  this.talk = () => {
    return `Hello hello, I am ${name}`;
  };
}

const sina = new Person("Sina");
console.log(sina);
// Here JS create: const this = {} and terurn this inside the constructor Person
// The only difference with the prototype is that the constructor indicate the Object

function SuperElement(type, content) {
  this.el = document.createElement(type);
  this.el.innerText = content;
  document.body.append(this.el);
  this.el.addEventListener("click", () => {
    console.log(this.el);
  });
}

const h1 = new SuperElement("h1", "Helloooooooo");

const array = ["Hi my frien", "I am at home", "We do like it"];
const myelements = array.map((item) => {
  return new SuperElement("p", item);
});
