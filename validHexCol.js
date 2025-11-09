// --------Practice 48: function that validates hex color using regular expression-------

const validateHexColor = (hexColor) => {
    return /^#([A-Fa-f\d]{3}|[A-Fa-f\d]{6})$/.test(hexColor);
};

console.log(validateHexColor("#abc123"));  // true
console.log(validateHexColor("abc123"));   // False
console.log(validateHexColor("#abc1234"));  // False
console.log(validateHexColor("#abc"));    // true
console.log(validateHexColor("#CD09")); // False
console.log(validateHexColor("#ab"));    // False
console.log(validateHexColor("#abc34"));  // False