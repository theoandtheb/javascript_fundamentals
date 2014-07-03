// Exercises: for loops

// EXERCISE: The even/odd reporter

// Write a for loop that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even").

for ( x=0; x<=20; x++ ) {
	if (x % 2 === 0) {
		document.write("The value of X is "+x+" and it is an even number.<br><br>");
	}
	else {
		document.write("The value of X is "+x+" and it is an odd number.<br><br>");
	}}

// EXERCISE: Multiplication Tables

// Write a for loop that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").

// Bonus: Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).

for (x=0; x<=10;x++) {
	document.write(x+" times 9 equals "+(9*x)+".<br><br>")
}
// EXERCISE: The Grade Assigner

// Check the results of assignGrade function from the conditionals exercise for every value from 60 to 100 - so your log should show "For 89, you got a B. For 90, you got an A.", etc.

var assignGrade = function(gr) {
	if (gr < 50) {
		return "F"
	} else if (gr<60) {
		return "D"
	} else if (gr<70) {
		return "C"
	} else if (gr<80) {
		return "B"
	} else {
		return "A" }
}


for (x=49;x<=100;x++) {
	document.write("For "+x+", you got a "+assignGrade(x)+".<br><br>")
}