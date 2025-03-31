// --------Practice 21: function that calculates mean of numbers-------

const calMean =(arr) => {
    // let mean = 0 ;
    if (arr.length === 0) {
        return 0 ;
    } else {
    let sum = arr.reduce( (acuum, curVal) => acuum+curVal , 0) ;
    let mean = sum/arr.length;
    return mean ;
}
}




console.log(calMean([1,2,3,4,5]));
console.log(calMean([]));
console.log(calMean([-1,0,1]));