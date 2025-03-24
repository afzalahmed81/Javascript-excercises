// --------Practice 08: function that finds factorial of a non negative number-------

const factorial= (num)=> {
    
    let fact = 1;
    for (i =1 ; i <= num; i++) {
        fact = fact * i ;
    }
    return fact;
}



console.log(factorial(4));
console.log(factorial(0)); // Output is 0
console.log(factorial(1));