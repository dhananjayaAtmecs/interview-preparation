const string = "is2 Thi1s T4est 3a"

const order =(words)=>{
  return words.split(' ').sort((a,b)=>a.match(/\d/) - b.match(/\d/)).join(' ')
}

console.log(order(string))


// https://medium.com/devsoonote/codewars-11-your-order-please-fef46960eab4 
