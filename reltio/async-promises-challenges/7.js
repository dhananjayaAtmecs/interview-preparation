// Execute 3 asynchronous functions one after the other in sequence using 
// async await and do not terminate on failure


// 1. Unlike promises, try-catch block can be used on async functions 
// 2. catch block for each asynchronous function can be used to catch errors and 
//    continue with next execution which will not propagate failures


const asyncFunc1 =()=>{
    console.log('async funtion 1')
}
const asyncFunc2 =()=>{
    console.log('async funtion 2')
}
const asyncFunc3 =()=>{
    console.log('async funtion 3')
}

+(async function executor() {
    try {
        await asyncFunc1();
        console.log('Async1 success');
    } catch {
        console.log('Async1 failure');
    }
    try {
        await asyncFunc2();
        console.log('Async2 success');
    } catch {
        console.log('Async2 failure');
    }
    try {
        await asyncFunc3();
        console.log('Async3 success');
    } catch {
        console.log('Async3 failure');
    }
    console.log('All succeeded');
})();