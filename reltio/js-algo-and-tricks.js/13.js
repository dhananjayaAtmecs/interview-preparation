// Given an array of ones and zeroes, convert the 
// equivalent binary value to an integer.

// Testing: [0, 0, 0, 1] ==> 1
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 0, 1] ==> 5
// Testing: [1, 0, 0, 1] ==> 9
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 1, 0] ==> 6
// Testing: [1, 1, 1, 1] ==> 15
// Testing: [1, 0, 1, 1] ==> 11


// Method 1: Using library methods 

const input1 = [0, 0, 0, 1];
const input2 = [1, 0, 1, 1];
const input3 = [1, 1, 1, 1];

const binaryToInt=(binaryArray)=>{
     const binaryString = binaryArray.join('');
     return parseInt(binaryString, 2);
}

console.log(binaryToInt(input1));
console.log(binaryToInt(input2));
console.log(binaryToInt(input3));


// Method 2: Reducing the array

