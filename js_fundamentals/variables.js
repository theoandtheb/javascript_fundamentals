// Exercises: Variables

// EXERCISE: The Fortune Teller

// Why pay a fortune teller when you can just program your fortune yourself?

// Store the following into variables: number of children, partner's name, geographic location, job title.
// Output your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."

var numberOfChildren = prompt("How many children do you have?");
var partnerName = prompt("What is the name of your partner?");
var wheel = prompt("Where do you reside?");
var jobTitle = prompt("What is your job?");

alert("You will be a "+jobTitle+" in "+wheel+", and married to "+partnerName+" with "+numberOfChildren+" kids.");


// EXERCISE: The Age Calculator

// Forgot how old someone is? Calculate it!

// Store the current year in a variable.
// Store their birth year in a variable.
// Calculate their 2 possible ages based on the stored values.
// Output them to the screen like so: "They are either NN or NN", substituting the values.

var currentYear = new Date().getFullYear();
var birthYear = prompt("In what year were you born?");

var ageHigh = currentYear-birthYear
var ageLow = currentYear-birthYear-1

document.write("You are either "+ageHigh+" or "+ageLow+" years old.<br><br>")


// EXERCISE: The Lifetime Supply Calculator

// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Store your current age into a variable.
// Store a maximum age into a variable.
// Store an estimated amount per day (as a number).
// Calculate how many you would eat total for the rest of your life.
// Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".

var ageNow = prompt("How old are you?");
var ageThen = prompt("At what age do you expect to stop snacking?");
var howMuchSnacks = prompt("Just how many of these do you eat every day?");
var lifetimeSnacks = (ageThen-ageNow)*howMuchSnacks*365

document.write("Do you realize that, at this pace, you will need to purchase another "+lifetimeSnacks+" of that junk.<br><br>")



// EXERCISE: The Geometrizer

// Calculate properties of a circle, using the definitions here.

// Store a radius into a variable.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Calculate the area based on the radius, and output "The area is NN".

var circleRadius = prompt("Say, do you know the radius of that circle?");
var circumferer = 2*Math.PI*circleRadius;
var areum = Math.PI*(circleRadius*circleRadius);

document.write("Well, how 'bout that!  Your circle is "+circumferer+" around and has an area of "+areum+".<br><br>");

// EXERCISE: The Temperature Converter

// It's hot out! Let's make a converter based on the steps here.

// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."

var celcier = prompt("Say, do you know cold it is outside in celcius?");
var celciusToF = 9/5*celcier+32
document.write("Yaw-sah!  That's "+celciusToF+"F in American.<br><br>");
var fahrendealie = prompt("Say, do you know hot it is outside in fahrenheit?");
var fahrToC = 5/9*fahrendealie-32
document.write("Yaw-sah!  That's "+fahrToC+"C in Canadian.");








