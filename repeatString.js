// --------Practice 27, function that repeats a string ------

const repeatString = (str,num,array=[])=>{

    return num > 0 ? str.repeat(num) : str ;
    // Method 2, using recursion
    // if (num < 1) {
    //     return array.join("");  // base case
    // } 
    
    // else {
    //     array.push(str);
    //    return repeatString(str,num-1,array);   // recursive case

    // }
    
    
}

console.log(repeatString('xyz',2));
