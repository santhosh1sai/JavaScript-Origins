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

const USA = describePopulation("USA", 333);
const India = describePopulation("India", 1331);
const China = describePopulation("China", 1441);
console.log(China, USA, India); */

/* 
// function declartion
function birthYear(year) {
  return 2037 - year;
}

// function expression
const age = function (year) {
  return 2037 - year;
};

// special fuction expressions => arrow functions

const age = (year) => 2037 - year; */

/*Coding Challenge #1
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so
one average score per team).
A team only wins if it has at least double the average score of the other team.
Otherwise, no team wins!
Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
to the console, together with the victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and
Data 2
5. Ignore draws this time
Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
Hints:
§ To calculate average of 3 values, add them all together and divide by 3
§ To check if number A is at least double number B, check for A >= 2 * B.
Apply this to the team's average scores 
GOOD LUCK  */

/* const calcAverage = (m1, m2, m3) => (m1 + m2 + m3) / 3;
let srcDolhins = calcAverage(44, 23, 71);
let srcKoalas = calcAverage(65, 54, 49);

const checkWinner = function (avgDolhins, avgKoalas) {
  if (avgDolhins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolhins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolhins) {
    console.log(`Koalas win (${avgDolhins} vs. ${avgKoalas})`);
  } else {
    console.log("No team Wins..");
  }
};
checkWinner(srcDolhins, srcKoalas);
checkWinner(576, 111);

srcDolhins = calcAverage(46, 88, 99);
srcKoalas = calcAverage(65, 54, 29);

checkWinner(srcDolhins, srcKoalas); */

/* Arryas */
/* 
const populations = [1441, 1331, 333, 50];
console.log(populations.length === 4);

function percentageOfWorld3(population) {
  return (population / 7900) * 100;
}
const percentages = [
  percentageOfWorld3(populations[0]),
  percentageOfWorld3(populations[1]),
  percentageOfWorld3(populations[2]),
  percentageOfWorld3(populations[3]),
];

console.log(percentages); */

/* Basic Array Operations(methods) 

variable_name.push() = adds elemnts at the end of array

variable_name.unshift() = adds elements to the beginning of the arrya

variable_name.pop() = pops the last element of array and can also return the poped element when saved in an array

variable_name.shift() = removes the first element of the array.

variable_name.indexOf('') = returns the index of the value

ES6 method
variable_name.includes() = returns true if the element exists in the array. Checks with strict equality no coersion.
*/

/* const neighbours = ["Canada", "Mexico"];
neighbours.push("Utopia");
console.log(neighbours);
neighbours.pop("Utopia");
console.log(neighbours);

if (!neighbours.includes("Germany")) {
  console.log("Probably not a central European country :D");
}

neighbours[neighbours.indexOf("Mexico")] = "Republic of Mexico";

console.log(neighbours); */

/* Coding Challenge #2
Steven is still building his tip calculator, using the same rules as before: Tip 15% of
the bill if the bill value is between 50 and 300, and if the value is different, the tip is
20%.
Your tasks:
1. Write a function 'calcTip' that takes any bill value as an input and returns
the corresponding tip, calculated based on the rules above (you can check out
the code from first tip calculator challenge if you need to). Use the function
type you like the most. Test the function using a bill value of 100
2. And now let's use arrays! So create an array 'bills' containing the test data
below
3. Create an array 'tips' containing the tip value for each bill, calculated from
the function you created before
4. Bonus: Create an array 'total' containing the total values, so the bill + tip
Test data: 125, 555 and 44
Hint: Remember that an array needs a value in each position, and that value can
actually be the returned value of a function! So you can just call a function as array
values (so don't store the tip values in separate variables first, but right in the new
array) �
GOOD LUCK */

/* const calcTip = function (billvalue) {
  if (billvalue <= 300 && billvalue) {
    return billvalue * 0.15;
  } else {
    return billvalue * 0.2;
  }
};
console.log(calcTip(100));

const bills = [125, 555, 44];
console.log(bills);

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);

const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(total); */

/* Intro to Objects */
/* const myCountry = {
  country: "USA",
  capital: "WDC",
  language: "English",
  population: 333,
  neighbours: ["Canada", "Mexico"],
};

console.log(
  `${myCountry.country} has ${myCountry.population} Million people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`
);

myCountry.location = "NA";
console.log(myCountry);

myCountry["states"] = 50; */

/* Object Methods
 calcAge: function () {
    this.age = 2037 - this.birthYeah;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${jonas.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
  }
};

console.log(jonas.calcAge());

console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);
*/
/* Coding Challenge #3
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
implement the calculations! Remember: BMI = mass / height ** 2 = mass
/ (height * height) (mass in kg and height in meter)
Your tasks:
1. For each of them, create an object with properties for their full name, mass, and
height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same
method on both objects). Store the BMI value to a property, and also return it
from the method
3. Log to the console who has the higher BMI, together with the full name and the
respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
tall. */

/* const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.BMI = this.mass / (this.height * this.height);
    return this.BMI;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.BMI = this.mass / (this.height * this.height);
    return this.BMI;
  },
};

const higherBMI = function () {
  if (mark.calcBMI() < john.calcBMI()) {
    return `${john.fullName}'s BMI(${john.BMI}) is higher than ${mark.fullName}'s${mark.BMI}`;
  } else {
    return `${mark.fullName}'s BMI(${mark.BMI}) is higher than ${john.fullName}'s(${john.BMI})`;
  }
};

console.log(higherBMI()); */

/* iteration: the for Loop */

/* for (let voter = 1; voter <= 50; voter++) {
  console.log(`Voter number ${voter} is currently voting`);
} */

/* Looping Arrays, Breaking and Continuing */

/* function percentageOfWorld(population) {
  return (population / 7900) * 100;
};

const population = [1441, 333, 1331];
const percentage = [];

for (let i = 0; i < population.length; i++) {
  const perc = percentageOfWorld(population[i]);
  percentage.push(perc);
};

console.log(percentage); */

/* Looping Backwards and Loops in loop */
/* const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];

for (let i = 0; i < listOfNeighbours.length; i++) {
  for (let j = 0; j < listOfNeighbours[i].length; j++) {
    console.log(`Neighbour:${listOfNeighbours[i][j]}`);
  }
}; */

/* While Loop */
/* function percentageOfWorld(population) {
  return (population / 7900) * 100;
};

const population = [1441, 333, 1331];
const percentage = [];
let i = 0;

while (i < population.length) {
  const perc = percentageOfWorld(population[i]);
  percentage.push(perc);
  i++;
};

console.log(percentage); */

/* Coding Challenge #4
Let's improve Steven's tip calculator even more, this time using loops!
Your tasks:
1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate
tips and total values (bill + tip) for every bill value in the bills array. Use a for
loop to perform the 10 calculations!
Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the
tips and totals arrays �
Bonus:
4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as
an argument. This function calculates the average of all numbers in the given
array. This is a difficult challenge (we haven't done this before)! Here is how to
solve it:
4.1. First, you will need to add up all values in the array. To do the addition,
start by creating a variable 'sum' that starts at 0. Then loop over the
array using a for loop. In each iteration, add the current value to the
'sum' variable. This way, by the end of the loop, you have all values
added together
4.2. To calculate the average, divide the sum you calculated before by the
length of the array (because that's the number of elements)
4.3. Call the function with the 'totals' array
GOOD LUCK */

/* const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];
const calcTip = function (billvalue) {
  if (billvalue <= 300 && billvalue) {
    return billvalue * 0.15;
  } else {
    return billvalue * 0.2;
  }
};
for (let i = 0; i < bills.length; i++) {
  const calTip = calcTip(bills[i]);
  tips.push(calTip);
  totals.push(calTip + bills[i]);
}

console.log(bills, tips, totals);

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum / arr.length;
};

console.log(calcAverage(totals)); */
