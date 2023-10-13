// A factory function is a function that create an object and return it
// We use it to avoid repeating the creation of many objects
// Advantages: Simple, No duplicates, Data privacy (You cannot change the properties)
function personFactory(name) {
  return {
    talk() {
      return `Hello, my name is ${name}`;
    },
  };
}

const me = personFactory("Chris");
console.log(me.talk());
console.log(me); // return the object with the method talk()

// Another example
function createElement(type, text, color) {
  const el = document.createElement(type);
  el.innerText = text;
  el.style.color = color;
  document.body.append(el);
  //   same as: return {el: el,}
  return {
    el,
    setText(text) {
      el.innerText = text;
    },
    setColor(color) {
      el.style.color = color;
    },
  };
}

const h1_elmt = createElement("h1", "The heading One", "green");
console.log(h1_elmt);
h1_elmt.setText("I like bananas");
console.log(h1_elmt);
const p = createElement("p", "We are the Ones", "blue");
console.log(p);
