// Example
function asyncFunc1(callback) {
    setTimeout(() => {
        callback(1);
    }, 3000);
}

function asyncFunc2(callback) {
    setTimeout(() => {
        callback(2);
    }, 2000);
}

function asyncFunc3(callback) {
    setTimeout(() => {
        callback(3);
    }, 1000);
}

function asyncParallel(asyncFuncArr, callback) {
    const resultArr = new Array(asyncFuncArr.length);  // 3 empty item will be created
    console.log('resultArr',resultArr) 
    let resultCounter = 0;
    
    asyncFuncArr.forEach((async, index) => {
        async(value => {
            resultArr[index] = value;
            resultCounter++;
            if (resultCounter >= asyncFuncArr.length) {
                callback(resultArr);
            }
        });
    });
}

asyncParallel([asyncFunc1, asyncFunc2, asyncFunc3], result => {
    console.log(result); // 1, 2, 3 (prints results of each asynchronous function in order)
});


