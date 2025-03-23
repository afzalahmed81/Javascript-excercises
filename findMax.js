// --------Practic 07: function that finds maximum number from array of numbers-------

const findMax = (arr) => {
    // Method 1
//     let max = arr[0];
//     for (i=0 ; i < arr.length ; i++)
//         if (arr[i] > max){
//             max= arr[i];
//         }
//         return max ;
// 

    // Method 2
    const max= Math.max(...arr);
    return max ;
}

console.log(findMax([21,1,5,8,3,4,10]));