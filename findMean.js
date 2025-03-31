// --------Practice 22: function that finds median of numbers in an array-------

const findMedian = (arr) => {

    arr.sort( (a,b) => a-b) ;
    if (arr.length % 2 !== 0) {
        let index = Math.floor(arr.length/2) ;
        return arr[index] ;
    } else {
        let index = arr.length/2 ;
        return (arr[index] + arr[index-1])/2 ; 
    }
}





console.log(findMedian([1,2,3,4,5]));
console.log(findMedian([1,2,3,4,5,6]));
console.log(findMedian([1,2,3,4,5,6,7]));
console.log(findMedian([1,2,3,4,5,6,7,8]));
