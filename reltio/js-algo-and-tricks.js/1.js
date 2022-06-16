// Write a function that takes in a string of one or more words, 
// and returns the same string, but with all five or more letter 
// words reversed . Strings passed in will consist of only letters 
// and spaces. Spaces will be included only when more than one 
// word is present.


const str = 'this is a sample string';
const reverseWords = str => {
   let reversed = '';
   reversed = str.split(" ")
   .map(word => {
      return word
      .split("")
      .reverse()
      .join("");
   })
   .join(" ");
   return reversed;
};
console.log(reverseWords(str));