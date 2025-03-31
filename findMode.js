// --------Practice 24: function that finds mode of numbers in an array-------

const findMode = (arr) => {
    arr.sort( (a,b) => a-b);
    let counts={};
    let maxNum= 0;
    let mode;
    for (let element of arr) {
        counts[element] = (counts[element] || 0) +1 ;
        if (counts[element]> maxNum) {
            maxNum = counts[element];
            mode= element;
        }
    }
    console.log(arr);
    console.log(counts);
    return mode;
}


console.log('The mode is',findMode([1,2,2,3,4,5,5,2]));