// Naming convention : camel case or underscore between words
//---------------------------------------------------------------------
/* 
Values and Variables 
1. Declare variables called 'country', 'continent' and  'population' and
assign their values according to your own country (population in millions)

2. Log their values to the console
*/
/* let js = "amazing";
console.log(js);

let firstName = "Sai Santhosh";
console.log(firstName);

let country = "India";
let continent = "Asia";
let population = 1331;

console.log(country);
console.log(continent);
console.log(population); */

//-------------------------------------------------------------------
/* Data Types
1. Number** let age =23;
2. String** let fisrtName = "Sai";
3. Boolean** let isMarried = false;
4. Null*
5. Undefined* let undefinedVar = undefined;
6. Symbol*
7. BigInt*

javaScript is a dynamically typed language. we need no explicit data type declaration.
*/

/* let isIsland = false;
let language;

console.log(typeof isIsland);
console.log(typeof language);
console.log(typeof country);
console.log(typeof continent);
console.log(typeof population); */

// ------------------------------------------
/* let, var and const 

1. let is a block scoped variable. mutable
2. var is for function scoped variable.
no empty declaration of const variables.
*/

/* language = "English"; */

// --------------------------------------
/* Basic Operators 
let x = 10;
x +=10; means x = x+10
+  for strings meaning concatinate strings 
assignment operator 
= += -= *= /= %=
math operators
+ - * / %
** for power
comparison operators
< <= > >=
*/

/* const halfPop = population / 2;
console.log(halfPop);
population++;
console.log(population);
console.log(population > 6);
console.log(population < 33);
const description =
  country +
  " is in " +
  continent +
  " and its " +
  population +
  " milliion people speak " +
  language;
console.log(description); */

/* Operarator Precedence
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#table
 */

/* Coding Challenge #1
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.
GOOD LUCK  */

const markHeight = 1.69;
const markMass = 78;
const johnHeight = 1.95;
const johnMass = 92;

const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / johnHeight ** 2;

const markHigherBMI = markBMI > johnBMI;

console.log(markBMI, johnBMI, markHigherBMI);

/* Strings and Template Literlas 

const name= `I'm ${firstName}`
Type conversion */
