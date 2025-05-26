// --------Practice 43: function that pushes fizz or Buzz according to the condition -------

const fizzBuzz = (startNum, endNum) => {
    let arr =[];
    for ( let i= startNum ; i <= endNum ; i++) {
        if (i %3 ===0 && i %5 ===0) {
            arr.push('fizzbuzz') // if number is divisible by both 3 and 5, push fizzbuzz into array
        } else if (i % 3 ===0) {
            arr.push('fizz');   // if number is divisible by 3, push fizz into array
        } else if (i % 5 === 0) {
            arr.push('buzz')    // if number is divisible by 5, push buzz into array
        } else {
            arr.push(i) }
    }
    return arr;
};

console.log(fizzBuzz(40,50));