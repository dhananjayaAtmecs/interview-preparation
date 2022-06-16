// Your task is to make a function that can take any 
// non-negative integer as an argument and return it 
// with its digits in descending order. Essentially, 
// rearrange the digits to create the highest possible 
// number.


var str = "92345";
var numStr = str.split('').map(function(item) {
    return +item;
});
var orderedArr = numStr.sort(function(a,b){
 return b-a;
});
var orderedStr = orderedArr.join("");
console.log(orderedArr);
console.log(orderedStr);