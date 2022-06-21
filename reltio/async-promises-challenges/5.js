// Execute 3 asynchronous functions one after the other in sequence using async await 

const asyncFunc1=()=>{
        console.log('function 1')
}
const asyncFunc2=()=>{
        console.log('function 2')
}
const asyncFunc3=()=>{
        console.log('function 3')
}

+async function executor(){
    try{
        await asyncFunc1();
        await asyncFunc2();
        await asyncFunc3();
        console.log('All succeeded');
    }
    catch(error){
        console.log("Error occured")
    }
}();