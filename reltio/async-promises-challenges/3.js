// Print numbers from 1 to 10 with delay of 1 second between each value being printed useing setTimeout

for( let i = 0; i<= 10; i++){
  setTimeout(()=>{
     console.log(i)
  },1000*i)
}
