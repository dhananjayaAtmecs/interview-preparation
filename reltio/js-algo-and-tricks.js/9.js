// Merging elements of two different arrays alternatively in third array 

// Given two arrays arr1[] and arr2[], we need to combine two 
// arrays in such a way that the combined array has alternate 
// elements of both. If one array has extra element, then these 
// elements are appended at the end of the combined array.


// Input : arr1[] = {1, 2, 3, 4, 5, 6}
//         arr2[] = {11, 22, 33, 44}
// Output: {1, 11, 2, 22, 3, 33, 4, 44, 5, 6}

// Input : arr1[] = {1, 2, 3, 4, 5, 6, 7, 8}
//         arr2[] = {11, 22, 33, 44}
// Output: {1, 11, 2, 22, 3, 33, 4, 44, 5, 6, 7, 8}

const arr1 = [1, 2, 3, 4, 5, 6]
const arr2 = [11, 22, 33, 44]

const mergeArray = (arr1, arr2) =>{
     const a1Length = arr1.length;
     const a2Length = arr2.length;
     const arr3 = new Array( a1Length + a2Length );
     
     let i=0; let j=0; let k=0;

     while ( i < a1Length && j < a2Length  ){ // rem
               arr3[k++] = arr1[i++];
               arr3[k++] = arr2[j++];
     }

     while ( i < a1Length ){  // rem
           arr3[k++] = arr1[i++]
     }

     while ( j < a2Length){ // rem
           arr3[k++] = arr2[j++]
     }

     return arr3;
}

console.log(mergeArray(arr1, arr2))



// https://www.geeksforgeeks.org/merging-elements-two-different-arrays-alternatively-third-array/ 
