// Function to find the next perfect square

const input = 144;

const nextPerfectSquare =(input)=>{
     const squareRootOfNumber = Math.floor(Math.sqrt(input)) ; 
     // rem math.floor is to avaoid error when imperfect square is passed

     return ( squareRootOfNumber + 1 ) ** 2
}

console.log(nextPerfectSquare(input))


// https://www.geeksforgeeks.org/find-the-next-perfect-square-greater-than-a-given-number/ 