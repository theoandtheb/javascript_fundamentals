// Exercises: if/else statements

// EXERCISE: What number's bigger?

// Write a function named greaterNum that:
// takes 2 arguments, both numbers.
// returns whichever number is the greater (higher) number.
// Call that function 2 times with different number pairs, and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").

var greaterNum = function(x,y) {
	if (x>y) {
		return x
	} else {
		return y
	}
}

greaterNum(4,5);

// EXERCISE: The World Translator

// Write a function named helloWorld that:
// takes 1 argument, a language code (e.g. "es", "de", "en")
// returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English.
// Call that function for each of the supported languages and log the result to make sure it works.

var helloWorld = function(l) {
	if (l === "es") {
		return "Ola, Mundo!" }
	 else if (l === "de") {
		return "Hallo, Worlden!"}
			else {
		return "Hello, World!"}
}

helloWorld();
helloWorld("es");
helloWorld("de");

// EXERCISE: The Grade Assigner

// Write a function named assignGrade that:
// takes 1 argument, a number score.
// returns a grade for the score, either "A", "B", "C", "D", or "F".
// Call that function for a few different scores and log the result to make sure it works.

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

assignGrade()

// EXERCISE: The Pluralizer

// Write a function named pluralize that:
// takes 2 arguments, a noun and a number.
// returns the number and pluralized form, like "5 cats" or "1 dog".
// Call that function for a few different scores and log the result to make sure it works.
// Bonus: Make it handle a few collective nouns like "sheep" and "geese".

var pluralize = function(noun,num) {
	if (noun === "goose") {
		return num +" "+"geese"
	} else if (noun === "sheep") {
		return num +" "+"sheep"
	} else {
		if (num > 1) {
			return num +" "+noun + "s"
		} else {
			return noun
		}
	}
}

pluralize()

