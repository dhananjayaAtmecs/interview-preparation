// check-that-a-word-is-an-isogram-with-pure-javascript 

const isIsogram=(str)=>{
    return str.split('').filter(( item, i, arr )=> arr.indexOf(item) == i ).length == str.length
}


console.log(isIsogram('thomas'));
console.log(isIsogram('moses'));