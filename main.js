console.log("JavaScript Basics");

//logging output

console.log("Hello");
console.warn("This is warning");
console.error("This is alert");

alert("Welcome to Javascript course");

//Variables

let age2 = 52;

age2 = 55;

//let variable in changeable
console.log(age2);

// DATA TYPES - String, Number, Boolean, null, undefined
const name1 = "ABC";
const age1 = 90;
const rating = 3.55;
const isCool = false;
const a = null;
const y = undefined;

// Check Type
console.log(typeof rating);

// String
const name = "vicky";
const age = 66;

//concatenation
console.log("My name is" + name + "and  i  am " + age);

//template for concatenation
console.log(`My name is ${name} and i am ${age} `);

//String properties and properties

const s = "Hello World";
let val;
// to get length
val = s.length;

//change case
val = s.toLowerCase();
val = s.toUpperCase();

//substring
val = s.substring(0, 7);

val = s.split("");

console.log(val);

// Arrays
//  It store multiple values in a variable
// ARRAY can be a mixture of both numbers and letters

const numbers = [5, 9, 32, 8, 65, 956];

const fruits = ["apple", "mangos", "guava", "pineapple", "pears"];

console.log(fruits);

// get one value - array start at 0
// indexing method

console.log(fruits[3]);

//add value

fruits[5] = "blueberries";
console.log(fruits);

// add value using push() function

fruits.push("strawberries");

//add value in begining in array (unshift())

fruits.unshift("mangos2");

//Remove last value (pop)

fruits.pop();

//check if array

console.log(Array.isArray(fruits));

//Get index

console.log(fruits.indexOf("guava"));

//Object literals
const person = {
  firstname: "john",
  age: 52,
  hobbie: ["music", "playing", "sports"],
  address: {
    street: "25 south st",
    city: "salem",
    state: "TN",
  },
};

console.log(person);

// get single name

console.log(person.firstname);

//get array value
console.log(person.hobbie[2]);

// get embeded object
console.log(person.address.state);

//add property to exsiting object
person.email = "abc@gmail.com";

console.log(person);

//Array of objects
const todos = [
  {
    id: 1,
    text: "Take out trash",
    iscomplete: false,
  },
  {
    id: 2,
    text: "Movie with friends",
    iscomplete: true,
  },
  {
    id: 3,
    text: "meeting with boss",
    iscomplete: false,
  },
];

console.log(todos);

//get specific value

console.log(todos[2].iscomplete);

// Format as JSON

console.log(JSON.stringify(todos));

// LOOPS

//for

for (let i = 0; i <= 10; i++) {
  console.log(`For Loop Number : ${i}`);
}

//while

let i = 0;
while (i <= 10) {
  console.log(`while loop : ${1}`);
  i++;
}

//Loop through array
// FOR LOOP

for (let i = 0; i < todos.length; i++) {
  console.log(` Todo ${i + 1}: ${todos[i].text}`);
}

for (let i = 0; i < todos.length; i++) {
  console.log(`todos ${i + 1}:${todos[i].iscomplete}`);
}

// FOR ...of loop

for (let todo of todos) {
  console.log(todo.iscomplete);
}

// HIGH ORDER ARRAY METHODS (show prototype)

//forEach() - Loops through array

todos.forEach(function(todos, i, mytodos) {
  console.log(`Todo text ${i + 1} :${todos.text}`);
  console.log(mytodos);
});

//map() - loop through and create new array
const todoiscomplete = todos.map(function(todo) {
  return todo.iscomplete;
});

console.log(todoiscomplete);

//fliter() - Returns array based on conditions
const todo1 = todos.filter(function(todo) {
  return todo.id === 3;
  // return only the id =3 (this is condtions check)
});

console.log(todo1);

// CONDITIONALS

// Simple statements
const x = 10;

if (x === 10) {
  console.log("correct");
} else if (x > 10) {
  console.log("greater");
} else {
  console.log("lesser");
}

// Switch
color = "brown";

switch (color) {
  case "red":
    console.log("red color");
    break;

  case "blue":
    console.log("blue color");
    break;
  case "orange":
    console.log("orange color");
    break;
  default:
    console.log("diferrnt color");
}

// ternary operator in short hand

const z = color == "brown" ? 10 : 20;
//result 10
console.log(z);
