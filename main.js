// More Function Exercises!

// 1. Without using Math.min(), write a function called minimum() that takes two numbers
//    and outputs the smallest one to the console.
console.log("Question 1");
function minimum(num1, num2){
	if( num1 > num2){
		return num2
	} else {
		return num1
	}
};
console.log("The smallest number is " + minimum(10, 5));

// 2. Create a new function called minimum3() to find the smallest of three numbers
console.log("Question 2");
function minimum3(array){
	var smallest = array[0];
	for(i=0; i < array.length; i++){
		if(array[i] < smallest){
			smallest = array[i];
		}
	}
	return smallest
};
console.log("The smallest number is " + minimum3([7, 12, 39, 46, 8, 25]));

// 3. Declare a function called sum() that takes an array of numbers as an argument adds them.
//    i.e. sum([1, 2, 3, 4]) should return 10.
console.log("Question 3");
function sum(array){
	var total = 0;
	for(i=0; i<array.length; i++){
		total += array[i];
	}
	return total;
}
var addArray = [1, 2, 10, 4];
console.log(sum(addArray));

// 4. Declare a function called multiply() that takes an array of numbers and multiplies them together.
//    i.e. multiply([1, 2, 3, 4]) should return 24.
console.log("Question 4");
function multiply(array){
	var total = 1;
	for(i=0; i<array.length; i++){
		total *= array[i];
	}
	return total;
}
var multiplyArray = [1, 2, 3, 4];
console.log(multiply(multiplyArray));

// 5. Write a function called filterSixPlus() that takes the following array and removes words
//    that are less than six characters.
console.log("Question 5");
function filterSixPlus(array){
	for(i=0; i < array.length; i++){
		if( array[i].length < 6 ){
			array.splice(i, 1);
		}
	}
	return array;
}
var sixLetters = ["pancakes", "bacon", "waffles", "OJ", "napkin"];
console.log(filterSixPlus(sixLetters));

// 6. Use a function to ask a user for a temperature in Celsius and converts it to Fahrenheit.
//    HINT: You may need to use parseFloat to convert the user's string input to a float.
// To convert temperatures in degrees Celsius to Fahrenheit, multiply by 1.8 (or 9/5) and add 32
console.log("Question 6");
// function convertDegrees(integer){
// 	return (integer * 1.8) + 32
// }
// var degree = prompt("Enter a degree in Celsius");
// degree = parseFloat(degree);
// console.log("The Celsius degree you entered, " + degree + ", converted to Fahrenheit is " + convertDegrees(degree));

// 7. Adding to the code in #6, prompt the user a second time to determine whether they'd like to convert from Fahrenheit to Celsius
//    or from Celsius to Fahrenheit. To keep it simple, instruct them to use "F to C" or "C to F".
//    Alert them with an error if they do not follow the rules.

// [°C] = ([°F] - 32) × 5/9
// [°F] = [°C] × 9/5 + 32

console.log("Question 7");
// function convertDegrees(integer, type){
// 	if(type === "F to C"){
// 		return (integer - 32) * ( 5/9 )
// 	}else{
// 		return (integer * 1.8) + 32
// 	}
// }
// var degree = prompt("Enter a degree in Celsius");
// degree = parseFloat(degree);
// var type = prompt("What conversion would you like? Enter 'F to C' for Fahrenheit to Celsius or 'C to F' for Celsius to Fahrenheit");
// if(type === "F to C"){
// 	console.log("You converted " +degree+ " degrees Fahrenheit to Celsius, and got " + convertDegrees(degree, type) + " degrees Celsius");
// }else{
// 	console.log("You converted " +degree+ " degrees Celsius to Fahrenheit, and got " + convertDegrees(degree, type) + " degrees Fahrenheit");
// }

// 8. Write a function countBs() that takes a string as its only argument and returns
//    a number that indicates how many uppercase “B” characters are in the string.
//    HINT: Google charAt()
console.log("Question 8");
function countBs(string){
	var count = 0;
	var i = 0;
	while (i < string.length) {
		if(string[i] == "B"){
			count++;
		}
		i++
	}
	return count
}
var stringBs = "hBrigBasrsdfgBasfgbasdglfBghByte";
console.log(countBs(stringBs));

// 9. Write a function called countChars() that behaves like countBs(), except it takes a
//    second argument that indicates what character is to be counted.
console.log("Question 9");
function countChars(string, character){
	var count = 0;
	var i = 0;
	while (i < string.length) {
		if(string[i] == character){
			count++;
		}
		i++
	}
	return count
}
var stringHs = "hBrigHBasrsHfgBasfgbasdgHlfBghByte";
var character = "H";
console.log(countChars(stringHs, character));

// 10. Declare a function called ohZero that replaces all of the o's in a string with 0's.
console.log("Question 10");
function ohZero(string){

}
var random = 'osdfjrofgosdfg';
console.log(ohZero());

// 11. Write a function that prints out the entire "99 Bottles of Beer on the Wall" song lyrics.

// 12. Create a 'Guessing Game'. The game starts by picking a random number.
//    It then prompts the user to guess the number. If the user's number is lower/higher,
//    it will prompt the user to enter another guess and tell the user if the guess was
//    too high or too low. This continues until the correct guess is entered.
//    When the correct guess is entered the user is given a success message with the correct number.

// 13. http://games.usvsth3m.com/javascript-under-pressure/
//     Have fun with these! Get as far as you can and record your progress and time. We'll try this again in a few weeks!
