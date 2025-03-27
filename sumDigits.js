// --------Practice 11: function which counts the digits of a number-------

const sumOfDigits = (num) => {
    const digiArray = Array.from(String(num), Number); // converts into array of Numbers
    //console.log(digiArray);
    const sum = digiArray.reduce((accum, curElem)=> accum + curElem,0);
    return sum ;
}


console.log(sumOfDigits(1234));
console.log(sumOfDigits(12));