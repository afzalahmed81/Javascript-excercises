// --------Practice 25: function that finds factorial of a number using recursive function------

const factorial = (num) => {
    if (num===1 || num ===0) {            // base case
        return 1 ;
    } else {
        return num * factorial(num-1) ;     // recursive case
    }

    
}






console.log(factorial(4));
console.log(factorial(1));