// Capitalize first letter of each word in a given string.
// Example 
// How can mirrors be real if our eyes aren't real"
// Output -  “How Can Mirrors Be Real If Our Eyes Aren't Real"

function titleCase(str) {
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);   // rem charAt()  
    }

    return splitStr.join(' '); 
 }
 
 console.log(titleCase("I'm a little tea pot"));
