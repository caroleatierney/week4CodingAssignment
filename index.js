//----------------------------------------    Question 1    ------------------------------------------------------------

// given an array of ages, determine the difference of the last element minus the first element, add another age and perform the calculation again 

console.log("---- Question 1 ----");

let ages = [3, 9, 23, 64, 2, 8, 28, 93]; // initialize array to values given  in assignment
console.log(`Last - first: ${ages[ages.length - 1] - ages[0]}`); // subtract the first element of an array from the last (last is length - 1 because array starts at 0)
ages.push(59); // add a new element to the end of the array
console.log(`Last - first after adding another element to the end of the array: ${ages[ages.length - 1] - ages[0]}`); // subtract the first element of an array from the last

// determine the average name length

var total = 0; // initialize global variable total to 0
for (i = 0; i <= ages.length - 1; i++) { // loop through the array
    total += ages[i]; // sum up all the ages
}
    console.log(`The average age is: ${total / ages.length}\n\n\n`)  // divide total of ages by the length of the array to get the average

//----------------------------------------    Question 2    ------------------------------------------------------------

// Determine the average letters per name in the array

console.log("---- Question 2 ----");

let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']; // initialize array
let totalLetters = 0; // initialize variable
for (i = 0; i <= names.length - 1; i++) { // loop through the array
    totalLetters += names[i].length; // sum up the length of each name
}
console.log(`The average number of letters per name is: ${totalLetters / names.length}`) // divide total of name letters by the length of the array to get the average number of letters per name

// concatenate each name in the array with a space between

var concatName = ''; // initialize variable
for (i = 0; i <= names.length - 1; i++) { // loop through the array
    concatName = concatName.concat(`${names[i]} `); // concatenate the names with a space between them
}
console.log(`The concatenated variable generated is: ${concatName}\n\n\n`) // print the concatenate variable

//----------------------------------------    Question 3    ------------------------------------------------------------

console.log("---- Question 3 ---- How do you access the last element of any array?")

console.log("Use the array name and the array method array.length -1 in the indices brackets."); // since the array starts at 0, you need to subtract 1 from the length to get the last index number
console.log("ie: for array names[]: names[names.length - 1]\n\n\n");

//----------------------------------------    Question 4    ------------------------------------------------------------

console.log("---- Question 4 ---- How do you access the first element of any array?")

console.log("Use the array name and position [0] which is the first index of an array.");
console.log("ie: for array names[]: names[0]\n\n\n");

//----------------------------------------    Question 5    ------------------------------------------------------------

console.log("---- Question 5 ----");

// create a new array containing the length of each name in the names array 

let nameLengths = []; // initialize array
for (i = 0; i <= names.length - 1; i++) { // loop through the array
    nameLengths.push(names[i].length); // add length of name to the end of the array
}
console.log(`This is the new array of nameLength: ${nameLengths}\n\n\n`);

//----------------------------------------    Question 6    ------------------------------------------------------------

console.log("---- Question 6 ----");

// loop through the length array and calculate the sum of all names

var sum = 0; // initialize sum
for (i = 0; i <= nameLengths.length - 1; i++) { // loop through the array
    sum += nameLengths[i]; // add the length of each name to the sum
}
console.log(`The sum of the elements in the nameLengths array is: ${sum}\n\n\n`) // print the sum

//----------------------------------------    Question 7    ------------------------------------------------------------

console.log("---- Question 7 ----");

// given a word and a number, concatenate the word that number of times without a space

var wordConcat = ""; // initialize global variable wordConcat
let concatByN = (word, n) => { // define arrow function
    for (let i = 1; i <= n; i++) { // loop n number of times
        wordConcat = wordConcat.concat(word); // concatenate the names
    }
    return wordConcat; // return the concatenated word
}
console.log(concatByN("Hello", 3),"\n\n\n"); // print the outcome of the function

//----------------------------------------    Question 8    ------------------------------------------------------------

console.log("---- Question 8 ----");

// given a first and last name, concatente them with a space

let makeFullName = (firstName, lastName) => { // define arrow function
    return fullName = firstName.concat(" ", lastName); // concatenate first and last names
}
console.log(makeFullName("John", "Snow"),"\n\n\n");

//----------------------------------------    Question 9    ------------------------------------------------------------

console.log("---- Question 9 ----");

// given an array of numbers return true or false if the total > 100

let greater100Funct = (numberArray) => { // define arrow function
    return numberArray.reduce((accumulator, currentValue) => accumulator + currentValue) > 100; // define arrow function and use array method reduce to loop through each element of the array adding all the values and compare against 100
}
console.log(`Is total of array > 100? ${greater100Funct([20, 15, 12, 6, 8, 70])} (sum > 100)`); // is > 100 returns true
console.log(`Is total of array > 100? ${greater100Funct([2, 15, 12, 6, 8, 7])} (sum < 100)`); // is < 100 returns false
console.log(`Is total of array > 100? ${greater100Funct([20, 20, 20, 20, 20])} (sum = 100)\n\n\n`); // is = 100 returns false

//----------------------------------------    Question 10    ------------------------------------------------------------

console.log("---- Question 10 ----");

// given an array of numbers, calculate the average of all the elements

let averageFunct = (numberArray) => numberArray.reduce((accumulator, currentValue) => accumulator + currentValue) / numberArray.length; // define arrow function and use array method reduce to loop through each element of the array adding all the values and divide by number of array elements
console.log(`The average of the array is: ${averageFunct([20, 15, 5, 30, 90, 80])}\n\n\n`); // call function setting values of array and log returned average

//----------------------------------------    Question 11    ------------------------------------------------------------

console.log("---- Question 11 ----");

// given two arrays, return true or false if array1 > array2

// define arrow function and use array method reduce to loop through each element of array1 adding all the values and compare against the same method applied to array2
let averageGreater = (array1, array2) => array1.reduce((accumulator, currentValue) => accumulator + currentValue) > array2.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(`Is the average of the first array greater than the second array? ${averageGreater([20, 15, 5, 30, 90, 80], [20, 15, 5, 30, 90, 80])} (they are =)`); // call function setting values of array and log false - arrays are =
console.log(`Is the average of the first array greater than the second array? ${averageGreater([20, 15, 5, 30, 90, 80], [20, 15, 5])} (array1 > array 2)`); // call function setting values of array and log true - array1 > array 2
console.log(`Is the average of the first array greater than the second array? ${averageGreater([20, 15, 5], [20, 15, 5, 30, 90, 80])} (array1 < array 2)\n\n\n`); // call function setting values of array and log false - array1 < array 2

//----------------------------------------    Question 12    ------------------------------------------------------------

console.log("---- Question 12 ----");

// given two variables, isHotOutside and money amount, determine if a drink can be bought - it must be hot outside and the money must be = $10.50

let willBuyDrink = (isHotOutside, moneyInPocket) => isHotOutside === true && moneyInPocket >= 10.50 // define arrow function and use conditionals to determine if drink can be bought
// call function passing in all possible scenarios and log the results
console.log(`Can you buy a drink? ${willBuyDrink(true, 13)} (it is hot outside and you have enough money)`);
console.log(`Can you buy a drink? ${willBuyDrink(true, 10)} (it is hot outside but you don'thave enough money)`);
console.log(`Can you buy a drink? ${willBuyDrink(true, 10.50)} (it is hot outside and you have just enough money)`);
console.log(`Can you buy a drink? ${willBuyDrink(false, 10.50)} (you have just enough money but it is not hot outside)`);
console.log(`Can you buy a drink? ${willBuyDrink(false, 13)} (you have enough money but it is not hot outside)`);
console.log(`Can you buy a drink? ${willBuyDrink(false, 9)} (you don't have enough money and it is not hot outside)\n\n\n`);

//----------------------------------------    Question 13    ------------------------------------------------------------
// This function will generate an array of randomly generated integers between 0 and 100
// The length of the array is passed into the function as a random integer between 1 and 10
// The array is returned and printed to the console
// The max and min integers of the array are also printed to the console
// I created this function to practice math methods such as max, min and random number generator

// (Math.floor(Math.random() * 101))
// Math.random produces a floating-point between 0 and 1)
// multiplying it by a maximum number will give a number with decimal < that maximum number (101 (where 101 is the max))
// Math.floor always rounds a number down to a number <= itself

console.log("---- Question 13 ----");

let practiceMathFunctions = (length) => { // define arrow function
    const newArray = []; // define new array variable
    let i = 0; // set counter to 0
    while (i < length) { // push a new random number to the end of the array as many times as the length of the array that was passed in
       newArray.push(Math.floor(Math.random() * 101)); // add random numbers to the end of the array
       i++; // increment loop counter
    }  
    return newArray; // return new array
}

let randomArray = practiceMathFunctions(Math.floor(Math.random() * 11)); // call the function passing in a random number for the length of the array
console.log(`The random array is ${randomArray}`) // print generated array
console.log(`The random array's length is ${randomArray.length}`) // print length of array
console.log(`The maximum integer in the array is: ${randomArray.reduce((a, b) => Math.max(a, b))}`) // print the largest number of the array
console.log(`The minimum integer in the array is: ${randomArray.reduce((a, b) => Math.min(a, b))}\n\n\n`) // print the smallest number of the array