// --------Practice 42: function that checks the validy of credit card according to Luhn formula -------

const validateCreditCard= (str) => {
    str = str.replace(/\D/g, '');
    let revNum ='' ;
    for (let i= str.length-1; i >= 0 ; i--) {
        revNum = revNum + str[i];
    }
    let doubleNum =revNum.split('')
    .map((curDigit , index) => {
        if (index % 2 !== 0) {
            curDigit = curDigit * 2;
            if (curDigit > 9) {
                curDigit = curDigit - 9;
            } else {
                curDigit = curDigit;
            }
        }
        return curDigit ;

    })
    .reduce( (acuum, curElem) =>acuum + Number(curElem) ,0);
     return doubleNum % 10 === 0;
    
};

console.log(validateCreditCard('1234 5678 4321 8765')); // Output false
console.log(validateCreditCard('4539 1488 0343 6467')); // Output true