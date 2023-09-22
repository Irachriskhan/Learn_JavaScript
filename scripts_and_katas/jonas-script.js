"use strict"
// document.getElementById("rr").innerHTML = z;
//let myName = document.getElementById("fname").value;

// truthy and falsy
// let fname = ""; // empty string
// let index; // Undefined variable
// let number = 0; // 0 value
// let x = null; // null
// -----------------------------------------------------------------
/*
// FUNCTION calling another FUNCTION
const calcAge = function(birthYear){
    return 2037 - birthYear;
}

const yearsUntilRetirement = function(birthYear, firstName){
    const age = calcAge(birthYear);
    const retirement = 65 - age;
    if(retirement > 0) return retirement;
    else return -1;
    // return `${firstName} retires in ${retirement} years`;
}
const jona = yearsUntilRetirement(1991, "Jonas");
const mike = yearsUntilRetirement(1950, "Mike");
console.log(jona);
console.log(mike);;
*/
// -----------------------------------------------------------------
/*
// Array declaration
const friends = ["Jack", "John", "Jonas"]
const years = new Array(1990, 1967, 2002, 2010, 2018); // Array function
console.log(years[3]);
console.log(years.length);
console.log(friends[friends.length - 1]); // print the previous value of the last
const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
//console.log(ages)
// CHALLENGE
const calcTip = function(bill){
    let tips;
    if(bill >= 50 && bill <= 300){
        return tips =(bill * 15) / 100;
    }else{
        return tips = (bill * 20) / 100;
    }
    // OR: return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
//console.log(calcTip(100));
const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(bills, tips, totals);
document.getElementById("hey").innerHTML= bills + "<br>" +tips + "<br>" + totals;
*/
// -----------------------------------------------------------------
/*
// DOT vs BRACKET NOTATION in OBJECTS

const chris = {
    firstName : 'Christophe',
    lastName : "Irakoze",
    age : 2027 - 2000,
    job : 'Teacher',
    friends : ["Mike", "Aaron", "Khan"]
}
const nameKey = "Name";// declared for multiple usage
console.log(chris['first' + nameKey]); // same as belowline
console.log(chris.firstName);
console.log(chris['last' + nameKey]);

// const interestedIn = prompt('What do you know about Christophe? firstName, lastName, age, job, or friends');
// if (chris[interestedIn]){
//     console.log(chris[interestedIn]);
// }else{
//     console.log("Wrong input! Choose between firstName, lastName, age, job, or friends");
// }
chris.location = "Rwanda";// add a new property as below
chris["twitter"] = '@IrChrisKhan'; // add new property
console.log(chris);
console.log(`${chris.firstName} has ${chris["friends"].length} friends, and his best friend is ${chris.friends[0]}`);
console.log(`${chris.firstName} has ${chris.friends.length} friends, and his best friend is ${chris.friends[0]}`);
*/
// -----------------------------------------------------------------
// OBJECTS METHODS
/*
let chris = {
    firstName : 'Christophe',
    lastName : "Irakoze",
    birthYear : 1991,
    job : 'Teacher',
    friends : ["Mike", "Aaron", "Khan"],
    hasDriverLicense : true,
    // calcAge: function(birthYear){ // calcAge = function expression
    //     return 2037 - birthYear
    // }
    // calcAge: function(){
    //     //console.log(this);
    //     return 2037 - this.birthYear;
    // }

    calcAge: function(){
        this.age = 2037 - this.birthYear; // here, this helps us to ceate a new property age
        return this.age;
    },

    getSummary: function(){
        return `${this.firstName} has ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriverLicense ? "a" : "no"} driver's license`;
    }
};
console.log(chris.getSummary())
console.log(chris.calcAge()); // console.log(chris.age) OUTPUTs : undefined
// console.log(chris.calcAge());
// console.log(chris.calcAge(chris.birthYear)); //send the year to calcAge
// console.log(chris["calcAge"](2000)); // same as above
// this is equal to the object[chris] calling the method[calcAge]
// means that this point to chris
*/
// CHALLENGE
/*
const mark = {
    fullName : "Mark Miller",
    mass : 78,
    height : 1.69,
    calcBMI : function(){
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};

const john = {
    fullName : "John Smith",
    mass : 92,
    height : 1.95,
    calcBMI: function(){
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};

john.calcBMI();
mark.calcBMI();

function calulation(){
    if( john.bmi > mark.bmi){
        console.log(`${john.fullName}'s BMI(${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`);
    }else{
        console.log(`${mark.fullName}'s BMI(${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`);
    }
}
calulation();

let dice = Math.trunc(Math.random() * 6) + 1; // random num entre 1 et 6
while (dice !== 6){
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
}
*/

//CHALLENGE
/*
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [], totals = [];

const calcTip = function(bill){
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

for(let i = 0; i < bills.length; i++ ){
    // tips[i] = calcTip(bills[i]);
    // totals[i] = bills[i] + tips[i];
    // console.log(bills[i], tips[i], totals[i]);
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
    console.log(bills, tips, totals);
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const totals = [];
function calcAvaerage (arr){
    let y = 0, sum = 0;
    while(y < arr.length){
        sum += arr[y];
        y++;
        totals.push(sum);
    }
    console.log(totals);
    return sum / arr.length
}
console.log(calcAvaerage(bills));
*/

/*
// PROBLEM 1
// We work for a company building smart home thermometer. 
// Task 1:: "Given an array of temperatures of one day, calculate the temperature amplitude.
// Keep in ind that sometimes there might be a sensor error"
//
// Task 2: "The amplitude can accept two temperature records of two days"
const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

const calcTempAmpliude = function(t1, t2){
    let temps = t1.concat(t2);
    let max = temps[0], min = temps[0];
    for (let i = 0; i < temps.length; i++){
        const curTemp = temps[i];
        if (typeof curTemp !== 'number') continue;
        if (curTemp > max) max = curTemp;
        if (curTemp < min) min = curTemp;
    }
    console.log(`${max}, ${min}`);
    return max - min;
}

const amplitude = calcTempAmpliude(temperatures, [9, 20 , 7]);
console.log(amplitude);
*/

// Debugging with the Console and Breakpoints
const measureKevin = function(){
    const measurement = {
        type : 'temp',
        unit : 'celcius',
        value : Number(prompt("Degrees celcius:"))
    }

    const kevin = measurement.value + 273;
    console.table(measurement);
    return kevin;
};

console.log(measureKevin())




// ------------- CALL BACK FUNCTION 

const oneWord = function (str){
    return str.replace(/ /g, '').toLowerCase(); // (/ /g, '') : remove&replace blanck spaces by
};

const upperFirstWord = function (str){
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
}

const transformer = function (str, fn){
    console.log(`Original string: ${str}`);
    console.log(`Transformed string: ${fn(str)}`);
    console.log(`Transformed by: ${fn.name}`);
}

// Calling functions
transformer('Javascript is the best', upperFirstWord);
transformer('Javascript is the best', oneWord);

