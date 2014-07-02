// Exercises: Functions

// EXERCISE: The Fortune Teller

// Why pay a fortune teller when you can just program your fortune yourself?

// Write a function named tellFortune that:
// takes 4 arguments: number of children, partner's name, geographic location, job title.
// outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
// Call that function 3 times with 3 different values for the arguments.

var tellFortune = function(numberOfChildren, partnerName, wheel, jobTitle) {
	document.write("You will be a "+jobTitle+" in "+wheel+", and married to "+partnerName+" with "+numberOfChildren+" kids.<br><br>")
}

tellFortune(prompt("How many children do you have?"),prompt("What is the name of your partner?"),prompt("Where do you reside?"),prompt("What is your job?"));
tellFortune(prompt("How many children do you have?"),prompt("What is the name of your partner?"),prompt("Where do you reside?"),prompt("What is your job?"));
tellFortune(prompt("How many children do you have?"),prompt("What is the name of your partner?"),prompt("Where do you reside?"),prompt("What is your job?"));
// EXERCISE: The Age Calculator

// Forgot how old you are? Calculate it!

// Write a function named calculateAge that:
// takes 2 arguments: birth year, current year.
// calculates the 2 possible ages based on those years.
// outputs the result to the screen like so: "You are either NN or NN"
// Call the function three times with different sets of values.
// Bonus: Figure out how to get the current year in JavaScript instead of passing it in.

var calculateAge = function(currentYear,birthYear) {
	var ageHigh = currentYear-birthYear
	var ageLow = currentYear-birthYear-1
	document.write("You are either "+ageHigh+" or "+ageLow+" years old.<br><br>")
}

calculateAge(new Date().getFullYear(),prompt("In what year were you born?"));

// EXERCISE: The Lifetime Supply Calculator

// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Write a function named calculateSupply that:
// takes 2 arguments: age, amount per day.
// calculates the amount consumed for rest of the life (based on a constant max age).
// outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
// Call that function three times, passing in different values each time.
// Bonus: Accept floating point values for amount per day, and round the result to a round number.

var calculateSupply = function(ageNow,ageThen,howMuchSnacks) {
	var lifetimeSnacks = (ageThen-ageNow)*howMuchSnacks*365
	document.write("Do you realize that, at this pace, you will need to purchase another "+lifetimeSnacks+" of that junk.<br><br>")
}

calculateSupply(prompt("How old are you?"),prompt("At what age do you expect to stop snacking?"),prompt("Just how many of these do you eat every day?"));

// EXERCISE: The Geometrizer

// Create 2 functions that calculate properties of a circle, using the definitions here.

// Create a function called calcCircumfrence:
var calcCircumfrence = function(circleRadius) {
	var circumferer = 2*Math.PI*circleRadius;
	document.write("Well, how 'bout that!  Your circle is "+circumferer+" around.<br><br>")
}

var calcArea = function(circleRadius) {
	var areum = Math.PI*(circleRadius*circleRadius)
	document.write("Well, how 'bout that!  Your circle is "+areum+" in area.<br><br>")
}

var circleRadius = prompt("Say, do you know the radius of that circle?");
calcCircumfrence(circleRadius);
calcArea(circleRadius);
// // Pass the radius to the function.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Create a function called calcArea:

// Pass the radius to the function.
// Calculate the area based on the radius, and output "The area is NN".

// EXERCISE: The Temperature Converter

// It's hot out! Let's make a converter based on the steps here.

// Create a function called celsiusToFahrenheit:

// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Create a function called fahrenheitToCelsius:

// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."


var celcToFahr = function(celcier) {
	var inFahr = 9/5*celcier+32
	document.write(celcier+"C is "+inFahr+"F<br><br>")
}

var fahrToCelc = function(fahrendealie) {
	var fahrToC = 5/9*fahrendealie-32
	document.write(fahrendealie+"F is "+fahrToC+"C<br><br>")
}

celcToFahr(prompt("Say, do you know cold it is outside in celcius?"));
fahrToCelc(prompt("Say, do you know hot it is outside in fahrenheit?"));








