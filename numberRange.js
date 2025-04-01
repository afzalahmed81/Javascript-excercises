// --------Practice 29, function that generates a range of numbers ------

const numRange = (start, end,arr=[]) => {
    for (let i = start ; i <= end ; i++) {
        arr.push(i);
    }

    // Method 2 , using while loop
    // while (start <= end) {
    //     arr.push(start);
    //     start ++ ;
    // }
    return arr.join(" , ") ;
}

console.log(numRange(-4,2));