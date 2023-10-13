// PROTOTYPE NOTATION 1 built with class
// By using a class, the methods are stored in __proto__ OBJECT in the browswer
// But other properties are visible
// Here, if we add a new function it willl bw kept as a function
class Person {
  talk() {
    return "Hey! I am speaking English!!";
  }
}
const jeanne = new Person();
console.log(jeanne);
console.log(jeanne.talk());
jeanne.age = 23; // Insert new property
console.log(Person); // here, the talk is VISIBLE
console.log(jeanne); // here, the talk is invisible
console.log(Person.prototype); // The output is similar to the previous
console.log(Person.prototype === jeanne.__proto__); // True
console.log(jeanne.__proto__.talk()); // is the same as the following line
console.log(jeanne.talk());
// To UPDATE THE talk() we do
Person.prototype.talk = function () {
  return "New and Improved talking";
};
console.log(jeanne.talk());

// PROTOTYPES IN OBJECTS NOTATION 2
// Here, if we add a new function it willl bw kept as a simple property
// Here, the __proto__ is empty
//
function SomePerson() {
  this.age = 34;
  this.talk = function () {
    return "Hey! I am talking!!";
  };
}

const me = new SomePerson();
console.log(me.talk());
console.log(me); // here, the talk() is directly VISIBLE in the object
this.age = 12;
console.log(me); // the age is does not change in SomePerson

// INHERI
// We are going to inherit the properties of another OBJECt
class Family {
  Father() {
    return "I am the parent of my child!";
  }
}

class TheSon extends Family {
  getMarried() {
    return "And me, I have a family too!!";
  }
}

const you = new TheSon();
console.log(you.Father());
console.log(you.getMarried());
const he = new Family();
// console.log(he.getMarried());  // Return an error : undefined
