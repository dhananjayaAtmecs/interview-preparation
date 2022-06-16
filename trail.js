new Promise((resolve, reject)=>{
    setTimeout(()=>{resolve(1)}, 1000)
}).then((data)=>{console.log(data); return data*2;})
.then((data)=>{console.log(data); return data*2;})
.then((data)=>{console.log(data)})
