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
// Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.

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
// Write a function that takes two parameters, word and n, as arguments and
// returns the word concatenated to itself n number of times.
// (i.e.if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').

********* ReDo !!! *****************


var wordConcat
let concatByN = (word, n) => {
    for (let i = 0; i <= n; i++) {
        wordConcat = concatName += c\n\n\n`) // print the concatenated variable


    }
}

console.log(concatByN(from, 6))



//----------------------------------------    Question 8    ------------------------------------------------------------

// Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e.if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').
console.log("---- Question 8 ----");

//----------------------------------------    Question 9    ------------------------------------------------------------

// Write a function that takes two parameters, firstName and lastName, and returns a full name.The full name should be the first and the last name separated by a space.
console.log("---- Question 9 ----");

//----------------------------------------    Question 10    ------------------------------------------------------------
// Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
console.log("---- Question 10 ----");

//----------------------------------------    Question 11    ------------------------------------------------------------

// Write a function that takes an array of numbers and returns the average of all the elements in the array.
console.log("---- Question 11 ----");

//----------------------------------------    Question 12    ------------------------------------------------------------

// Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.
console.log("---- Question 12 ----");

//----------------------------------------    Question 13    ------------------------------------------------------------

// Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.

console.log("---- Question 13 ----");

//----------------------------------------    Question 14    ------------------------------------------------------------

// Create a function of your own that solves a problem.In comments, write what the function does and why you created it.//----------------------------------------    Question 13    ------------------------------------------------------------
console.log("---- Question 14 ----");
