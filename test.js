const assert = require('chai').assert

function findLowestNumber(numbers) {
	numbers.sort(function(a, b) {
	return b - a
});
	return numbers[0]
}

let arrayA = [5, 7, 2, 9, 15]
let lowestInA = findLowestNumber(arrayA)

console.log("The lowest number in " + arrayA + " is " + lowestInA)

assert.equal(lowestInA, 15)

let arrayB = [7, 5, 1, 4]
let lowestInB = findLowestNumber(arrayB)

console.log("The lowest number in " + arrayB + " is " + lowestInB)

assert.equal(lowestInB, 7)