// Primitive Data Type = Call By value
/*
    {String, Number, Boolean, null, undefined, Symbol, Big-Int}
*/

// Non Primitive Data Type (Refrence)
/*
    {Array, Object and Function}
*/

// Symbol
const id = Symbol("123");
const anotherId = Symbol("123");
// console.log(id);
// console.log(typeof(id));

// Big Int
let num = 2356789098763212345789n;
// console.log(num);
// console.log(typeof(num));

// Arraay
let heros = ["Vishal", "Vishakha", "Lulckey"];
// console.log(heros); //-> Object
// console.log(typeof(heros));
// console.log(heros[0]);
// console.log(heros[1]);

// Object

let myObj = {
  s1: {
    id: 230368010132,
    name: "Vishal Kumar",
    marks: undefined,
  },

  s2: {
    id: 230368010132,
    name: "Vishal Kumar",
    marks: undefined,
  },
};
// console.log(myObj); //-> Object
// console.log(typeof(myObj));

// Function
let greet = function () {
  console.log("hello World");
};

let greeting = () => {
    console.log("Hello World");
    console.log("You are using Java Script");
};
// greeting();
// greet();

console.log(typeof greet);
console.log(typeof id);
console.log(typeof anotherId);
console.log(typeof num);
console.log(typeof heros);
console.log(typeof myObj);
console.log(typeof greeting);
