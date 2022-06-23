
const asyncFunction = new Promise((resolve, reject)=>{
                          setTimeout(()=>resolve(4), 3000)
                       }) 

asyncFunction.then( (data)=> {console.log(data); return data*3 } )
  .then( (data)=>{console.log(data); return data*3})
   .then( (data)=>{console.log(data)})