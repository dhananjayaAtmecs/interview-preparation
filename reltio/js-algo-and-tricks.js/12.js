// Mumbling 

// accum("abcd");    // "A-Bb-Ccc-Dddd"
// accum("RqaEzty"); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt");    // "C-Ww-Aaa-Tttt"

const accum=(string)=>{
   const word = [];
    for(let i=0; i<string.length; i++){
        word.push(  string[i].toUpperCase() + Array( i+1 ).join(string[i]).toLowerCase() )
    }
    return word.join('-');
}

console.log(accum("abcd"))
console.log(accum("RqaEzty"))
console.log(accum("cwAt"))

// https://steelx.gitbooks.io/javascript-algorithms/content/mumbling.html 