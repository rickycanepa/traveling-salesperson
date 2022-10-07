// You fill in some sample weekly miles traveled in this array
const weeklyMiles = [20, 15, 80, 10, 45];
let accum = 0;

// Declare a variable to store the total. Initial value is 0.

/*
	Iterate the array of miles with a for..of loop.
	Add each mileage to the total mileage variable.
*/
for(let i of weeklyMiles){
    accum += i;
}

let avg = accum / weeklyMiles.length;
// Declare a new variable to store the average miles over time

// Output the average miles and the total miles to the console
console.log("I average " + avg + " miles each week.");
console.log("I have driven a total of " + accum + " miles.")