console.log('***** Function Practice *****');

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(name) {
  return 'Hello, Your Name!';
}
// Remember to call the function to test
console.log('test - should say "Hello, Your Name!"', helloName());

// 3. Function to add two numbers together & return the result
function addNumbers(firstNumber, secondNumber) {
  console.log('in addNumbers');
  return firstNumber + secondNumber;
}

console.log('test - should add numbers', addNumbers(2, 4));


// 4. Function to multiply three numbers & return the result
function multiplyThree(num0, num1, num2) {
  return num0 * num1 * num2;
}
console.log('test - multiplies 3 numbers', multiplyThree(2, 2, 4));

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive(number) {
  if (number > 0) {
    return;
  }
  return;
}
console.log('is postive:', isPositive(9));
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
function isPositive(number) {
  if (number > 0){
    return true;
  } else if (number === 0){
    return false;
  } else {
    return false;
  }
}

console.log('isPositive - should say true', isPositive(3));
console.log('isPositive - should say false', isPositive(0));
console.log('isPositive - should say false', isPositive(-3));


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast(array) {
  return array[array.length - 1];
}
console.log('last item in array:', getLast);
// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
let randomArray = [ 2, 4, 6]
function find(value, array) {
for (i = 0; i <= array.length; i++) {
  if (value === array[i]){
    return true;
  }
}
return false;
}

console.log('find value in an array:', find(2, randomArray));
// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise

function isFirstLetter(letter, string) {
  if (string.length === 0) {
    return false; 
  }
  return string.charAt(0) === letter;
}
console.log('isFirstLetter - should say true', isFirstLetter('a', 'apple'));
console.log('isFirstLetter - should say false', isFirstLetter('z', 'apple'));

// 9. Function to return the sum of all numbers in an array
let sumAllArray = [-1, -4, -9, -3];

function sumAll() {
  let sum = 0;
  // TODO: loop to add items
for (i = 0; i < sumAllArray.length; i++){
  sum += sumAllArray[i];
}
  // TODO: return the sum
  return sum;
}

console.log('sum of the array:', sumAll(sumAllArray));


// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
let allPositiveArray = [];

function allPositive() {
  for ( i = 0; i < sumAllArray.length; i++){
    if ( sumAllArray[i] > 0 ) {
      allPositiveArray.push(sumAllArray[i]);
    } 
    }
  }

console.log('this should be an empty array:', allPositiveArray);

// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!


// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    hello,
    helloName,
    addNumbers,
    multiplyThree,
    isPositive,
    getLast,
    find,
    isFirstLetter,
    sumAll,
    allPositive,
  };
} catch (e) {
  // Do nothing
}