// a) Find the output for the following 
const promise1 = new Promise((resolve, reject) => {
throw 'Uh-oh!';
});
promise1.catch((error) => {console.error(error);}) // ?
promise1.catch((error) => {console.error(error);}); //?



 const promise2 = new Promise((resolve, reject) => {
// throw 'Uh-oh!'; 
reject('rejected')
});
promise2.catch((error) => {console.error(error);}).catch((error) => {console.error('2nd catch',error);}); //?