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

/* const markHeight = 1.69;
const markMass = 78;
const johnHeight = 1.95;
const johnMass = 92;

const markBMI = Math.floor(markMass / markHeight ** 2);
const johnBMI = Math.floor(johnMass / johnHeight ** 2);

const markHigherBMI = markBMI > johnBMI;

console.log(markBMI, johnBMI, markHigherBMI); */

/* Strings and Template Literlas 

const name= `I'm ${firstName}`
 */

/* const population = 331;
const country = "USA";
const continent = "NA";
const fullName = "sai santhosh";
const description = `Hi my name is ${fullName} and I am from ${country} which is in ${continent} with a ${population} million population`;

console.log(description); */

/* if / else Statements 

control structure
if(){

} else {


}

*/

/* Coding Challenge #2
Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement �
GOOD LUCK � 
 */

/* if (markBMI > johnBMI) {
  console.log(`Mark's BMI ${markBMI} is higher than John's ${johnBMI}`);
} else {
  console.log(`John's BMI ${johnBMI} is higher than Mark's ${markBMI}`);
}
 */

/* Type conversion and Coercion 

*/
/* false values 0, '', undefined, null, NaN */

/* Equality Operators == vs === */

/* const numNeighbours = Number(
  prompt("How many neighbour countries does your country have?")
);

if (numNeighbours === 1) {
  console.log("Only 1 border!");
} else if (numNeighbours > 1) {
  console.log("More than 1 border");
} else {
  console.log("No borders");
} */

/* Boolean Logic 

AND, OR & NOT

Logical Operators

&& || & !
*/

/* const language = "English";
const isIsland = false;

if (country < 50 && language === "English" && !isIsland) {
  console.log("You should live in USA!");
} else {
  console.log("Don't live in USA!");
}
 */

/* Coding Challenge #3
There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks �
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
GOOD LUCK  */

/* const firstMatchScoreForDolphins = 97;
const secoundMatchScoreForDolphins = 112;
const thirdMatchScoreForDolphins = 101;
const averageScoreForDolphins =
  (firstMatchScoreForDolphins +
    secoundMatchScoreForDolphins +
    thirdMatchScoreForDolphins) /
  3;
console.log(averageScoreForDolphins);

const firstMatchScoreForKoalas = 109;
const secoundMatchScoreForKoalas = 95;
const thirdMatchScoreForKoalas = 123;
const averageScoreForKoalas =
  (firstMatchScoreForKoalas +
    secoundMatchScoreForKoalas +
    thirdMatchScoreForKoalas) /
  3;
console.log(averageScoreForKoalas);

if (
  averageScoreForDolphins === averageScoreForKoalas &&
  averageScoreForDolphins >= 100 &&
  averageScoreForKoalas >= 100
) {
  console.log("its a Draw");
} else if (
  averageScoreForDolphins < averageScoreForKoalas &&
  averageScoreForKoalas >= 100
) {
  console.log("Koalas Win");
} else if (
  averageScoreForDolphins > averageScoreForKoalas &&
  averageScoreForDolphins >= 100
) {
  console.log("Dolphins Win");
} else {
  console.log("No team Wins the trophy");
} */
/*  */
