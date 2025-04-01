// --------Practice 30, function that generates a range of numbers using recursion ------

const numRangeRecur =(a ,b, arr=[])=> {
    if (a > b) {            // base case
        return arr;
    } else {
        arr.push(a);
        numRangeRecur(++a ,b, arr);          // Recursive call with incremented a
    }
    return arr.join(" , ") ;
}

console.log(numRangeRecur(-3,3));