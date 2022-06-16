// Run three functions one after the other passing data from first to last function. 

new Promise(function(resolve, reject) {
    setTimeout(() => resolve(1), 1000);
  }).then(function(result) {
  
    console.log(result); 
    return result * 2;
  
  }).then(function(result) { 
  
    console.log(result); 
    return result * 2;
  
  }).then(function(result) {
  
    console.log(result);
    return result * 2;
  });
  