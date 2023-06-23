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