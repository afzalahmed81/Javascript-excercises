// --------Practice 10: function which checks that two arrays are equal or not-------

const equalArrays =(arr1,arr2) => {
    if (arr1.length !== arr2.length) {
        return false;
    }
    return arr1.every((curVal, index)=> curVal === arr2[index]  ) // comparing every element of two arrays
}



console.log(equalArrays([1,2,3],[1,2,3]));
console.log(equalArrays([5,6,7],[1,2,3]));
console.log(equalArrays([],[]));
console.log(equalArrays([1,2,3,4],[1,2,3,4,5]));