let ages = [3, 9, 23, 64, 2, 8, 28, 93]; // initialize array
console.log(`Last - first: ${ages[ages.length - 1] - ages[0]}`); // subtract the first element of an array from the last
ages.push(59); // add a new eleement to he end of the array
console.log(`Last - first after adding element: ${ages[ages.length - 1] - ages[0]}`); // subtract the first element of an array from the last

var total = 0;
for (i = 0; i <= ages.length - 1; i++) { // loop through the array
    total += ages[i]; // sum up all the ages
    if (i === ages.length -1) {
        console.log(`The average is: ${total / ages.length}`) // divide total of ages by the length of the array to get the average
    }
}