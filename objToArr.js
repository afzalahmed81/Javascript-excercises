// --------Practice 36: Convert an object to Array and vice versa-------

const obj = {
    name : "Asim",
    age :   40,
    city : "Karachi",
};

let objToArr = Object.entries(obj);
console.log(objToArr);     // objet to Array of Arrays (key-value pairs)
console.log(objToArr.flat());  // Array of arrays to simple array

// converts array of key-value pairs to object
let obj2 = Object.fromEntries(objToArr);
console.log(obj2);


