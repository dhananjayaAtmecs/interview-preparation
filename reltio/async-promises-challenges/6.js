// Execute 3 asynchronous functions one after the other 
// in sequence using promise chaining and do not 
// terminate on failure

// 1. The promise which gets rejected will invoke the 2nd function 
//    argument to then handler
// 2. The failure handler will receive the error and continue 
//    with next execution which will not propagate failures

const async1 = async()=>{
   await console.log('async1')
}
const async2 = async()=>{
    await console.log('async2')
}
const async3 = async()=>{
    await console.log('async3')
}
async1()
    .then(
        () => {
            console.log('Async1 success');
        },
        () => {
            console.log('Async1 failure');
        }
    )
    .then(async2)
    .then(
        () => {
            console.log('Async2 success');
        },
        () => {
            console.log('Async2 failure');
        }
    )
    .then(async3)
    .then(
        () => {
            console.log('Async3 success');
        },
        () => {
            console.log('Async3 failure');
        }
    );