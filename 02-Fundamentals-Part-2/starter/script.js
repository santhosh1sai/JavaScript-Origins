"use strict";

/* calling/ running / invoking function 

function can receive and give data*/

/* function describeCountry(country, population, capitalCity) {
  console.log(
    `${country} has ${population} million pepole and its capital city is ${capitalCity}`
  );
}

const USA = describeCountry("USA", 333, "Washigton DC");
const India = describeCountry("India", 1333, "Delhi"); */

/* fuction declartion vs expression 
// Function declaration
function calcAge1(birthYeah) {
    return 2037 - birthYeah;
  }
  const age1 = calcAge1(1991);
  
  // Function expression
  const calcAge2 = function (birthYeah) {
    return 2037 - birthYeah;
  }
  const age2 = calcAge2(1991);
  
  console.log(age1, age2);
  
  functions are value that is why we can store them in variables
  
  can call a fuction declartion before you define it - this works due to Hoisting

  in function expression we cannot call before defining it - this is due to Hoisting
  */
/* function percentOfWorld1(population) {
  return (population / 7900) * 100;
}

const china = percentOfWorld1(1441);
console.log(china);

const USA = percentOfWorld1(333);
console.log(USA);

const percentOfWorld2 = function (population) {
  return (population / 7900) * 100;
};

console.log(percentOfWorld2(133)); */

/* Arrow Function this was added in ES6
  
  */

/* const percentOfWorld3 = (population) => (population / 7900) * 100;

console.log(percentOfWorld3(1331));

const calcAge3 = (birthYeah) => 2037 - birthYeah;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYeah, firstName) => {
  const age = 2037 - birthYeah;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1980, "Bob")); */

/* Function XCalling Functions */
/* function percentOfWorld3(population) {
  return (population / 7900) * 100;
}

function describePopulation(country, population) {
  const percentage = percentOfWorld3(population);
  const description = `${country} has ${population} million people, which is about ${percentage}% `;
  return description;
}

const China = describePopulation("China", 1441);
const USA = describePopulation("USA", 333);
const India = describePopulation("India", 1331);
console.log(China, USA, India); */
