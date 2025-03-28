// --------Practice 16: function that finds minimum number from array of numbers-------

const findMin = (arr) => {
    if (Array.isArray(arr) && arr.length===0) { // checks arr is an array and empty
        return "Array is empty";
    }
    const minNum = Math.min(...arr);
    return minNum ;

    // Method 2
    // arr = arr.sort((a, b) => {
    //     if (b>a) return -1 ;
    // });
    // return arr[0] ;

}



console.log(findMin([1,2,5,7,10,-3]));
console.log(findMin([]));
