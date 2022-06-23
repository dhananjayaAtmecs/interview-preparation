/*You are going to be given a word. Your job is to return the middle 
character of the word. If the word's length is odd, 
return the middle character. 
If the word's length is even, return the middle 2 characters.
Example
getMiddle("test") should return "es"
getMiddle("testing") should return "t"
getMiddle("middle") should return "dd"*/


const getMiddle=(string)=>{
   if(string.length % 2 !== 0)
      return string[Math.floor(string.length/2)+1];

      return [ string[ ( string.length / 2) - 1 ], string[ (string.length / 2) ] ];
}

console.log(  getMiddle("test") )  // should return "es"
console.log(  getMiddle("testing") ) // should return "t"
console.log(  getMiddle("middle") ) // should return "dd"


// http://www.java2s.com/ref/javascript/javascript-string-get-word-middle-character.html 
