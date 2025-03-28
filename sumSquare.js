// --------Practice 15: function computes sum of squares of array elements-------

const sumOfSquares = (arr) => {
   return arr.reduce((acuum, curElem)=> acuum + curElem*curElem, 0);

// Method 2
    // let sum = 0;
    // for (let elem of arr) {
    //     sum = sum + elem*elem ;
    // }
    // return sum;
}



console.log(sumOfSquares([1,2,3,4]));