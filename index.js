//----------------------------------------    Question 1    ------------------------------------------------------------

console.log("---- Question 1 ----");
let ages = [3, 9, 23, 64, 2, 8, 28, 93]; // initialize array
console.log(`Last - first: ${ages[ages.length - 1] - ages[0]}`); // subtract the first element of an array from the last
ages.push(59); // add a new element to he end of the array
console.log(`Last - first after adding another element to the end of the array: ${ages[ages.length - 1] - ages[0]}`); // subtract the first element of an array from the last

var total = 0;
for (i = 0; i <= ages.length - 1; i++) { // loop through the array
    total += ages[i]; // sum up all the ages
    if (i === ages.length -1) {
        console.log(`The average age is: ${total / ages.length}\n\n\n`)  // divide total of ages by the length of the array to get the average
    }
}

//----------------------------------------    Question 2    ------------------------------------------------------------

console.log("---- Question 2 ----");
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']; // initialize array
let totalLetters = 0;
for (i = 0; i <= names.length - 1; i++) { // loop through the array

    // let totalLetters += names[i].length; // *** Why doesnt this work ****

    totalLetters += names[i].length; // sum up the length of each name
    if (i === names.length - 1) {
        console.log(`The average number of letters per name is: ${totalLetters / names.length}`) // divide total of name letters by the length of the array to get the average number of letters per name
    }
}

var bigName = '';
for (i = 0; i <= names.length - 1; i++) { // loop through the array
    bigName = bigName.concat(" ", names[i]); // concatenate the names

    // bigName = bigName.concat( ${names[i]}); // concatenate the names *** Why doesnt this work ****

    if (i === names.length - 1) {
        console.log(`The bigName generated is: ${bigName}\n\n\n`) // print the concatenate variable
    }
}

//----------------------------------------    Question 3    ------------------------------------------------------------

console.log("---- Question 3 ---- How do you access the last element of any array?")
console.log("Use the array name and the array method array.length in the indices brackets.");
console.log("ie: for array names[]: names[names.length]\n\n\n");

//----------------------------------------    Question 4    ------------------------------------------------------------

console.log("---- Question 4 ---- How do you access the first element of any array?")
console.log("Use the array name and position [0] which is the first index of an array.");
console.log("ie: for array names[]: names[0]\n\n\n");

//----------------------------------------    Question 5    ------------------------------------------------------------

console.log("---- Question 5 ----");

let nameLengths = [];
for (i = 0; i <= names.length - 1; i++) { // loop through the array
    nameLengths.push(names[i].length); // length of name
}
console.log(`This is the new array of nameLength: ${nameLengths}\n\n\n`);

//----------------------------------------    Question 6    ------------------------------------------------------------

console.log("---- Question 6 ----");
var sum = 0;
for (i = 0; i <= nameLengths.length - 1; i++) { // loop through the array
    sum += nameLengths[i];
    if (i === nameLengths.length - 1) {
        console.log(`The sum of the elements in the nameLengths array is: ${sum}\n\n\n`) // print xxxxxxx
    }
}

//----------------------------------------    Question 7    ------------------------------------------------------------

console.log("---- Question 7 ----");

var wordConcat = ""; // initialize global variable
let concatByN = (word, n) => {
    for (let i = 1; i <= n; i++) { // loop n number of times
        wordConcat = wordConcat.concat(word); // concatenate the names
    }
    return wordConcat; // return the concatenated word
}
console.log(concatByN("Hello", 3),"\n\n\n"); // print the outcome of the function

//----------------------------------------    Question 8    ------------------------------------------------------------

console.log("---- Question 8 ----");

let makeFullName = (firstName, lastName) => {
    return fullName = firstName.concat(" ", lastName); // concatenate first and last names
}
console.log(makeFullName("John", "Snow"),"\n\n\n");

//----------------------------------------    Question 9    ------------------------------------------------------------

console.log("---- Question 9 ----");

let greater100Funct = (numberArray) => {
    return numberArray.reduce((accumulator, currentValue) => accumulator + currentValue) > 100;
}
console.log(`Is total of array > 100? ${greater100Funct([20, 15, 12, 6, 8, 70])} (sum > 100)`); // is > 100 returns true
console.log(`Is total of array > 100? ${greater100Funct([2, 15, 12, 6, 8, 7])} (sum < 100)`); // is < 100 returns false
console.log(`Is total of array > 100? ${greater100Funct([20, 20, 20, 20, 20])} (sum = 100)\n\n\n`); // is = 100 returns false

//----------------------------------------    Question 10    ------------------------------------------------------------
// Write a function that takes an array of numbers and returns the average of all
// the elements in the array.

console.log("---- Question 10 ----");

let averageFunct = (numberArray) => numberArray.reduce((accumulator, currentValue) => accumulator + currentValue) / numberArray.length;
console.log(`The average of the array is: ${averageFunct([20, 15, 5, 30, 90, 80])}\n\n\n`); // call function and log returned average

//----------------------------------------    Question 11    ------------------------------------------------------------

console.log("---- Question 11 ----");

let averageGreater = (array1, array2) => array1.reduce((accumulator, currentValue) => accumulator + currentValue) > array2.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(`Is the average of the first array greater than the second array? ${averageGreater([20, 15, 5, 30, 90, 80], [20, 15, 5, 30, 90, 80])} (they are =)`); // call function and log false - arrays are =
console.log(`Is the average of the first array greater than the second array? ${averageGreater([20, 15, 5, 30, 90, 80], [20, 15, 5])} (array1 > array 2)`); // call function and log true - array1 > array 2
console.log(`Is the average of the first array greater than the second array? ${averageGreater([20, 15, 5], [20, 15, 5, 30, 90, 80])} (array1 < array 2)\n\n\n`); // call function and log false - array1 < array 2

//----------------------------------------    Question 12    ------------------------------------------------------------

console.log("---- Question 12 ----");

let willBuyDrink = (isHotOutside, moneyInPocket) => isHotOutside === true && moneyInPocket >= 10.50
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

console.log("---- Question 13 ----");

let practiceMathFunctions = (length) => {
    const newArray = [];
    let i = 0;
    while (i < length) {
       newArray.push(Math.floor(Math.random() * 100));
       i++; 
    }  
    return newArray;
}

let randomArray = practiceMathFunctions(Math.floor(Math.random() * 10) +1);
console.log(`The random array is ${randomArray}`)
console.log(`The random array's length is ${randomArray.length}`)
console.log(`The maximum integer in the array is: ${randomArray.reduce((a, b) => Math.max(a, b))}`)
console.log(`The minimum integer in the array is: ${randomArray.reduce((a, b) => Math.min(a, b))}\n\n\n`)

