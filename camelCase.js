// --------Practice 17-A: function that converts a string into camel case-------

const toCamelCase = (str) => {
    return str
        .trim()
        .split(" ")
        .map((curElem, index) => {
            if (index===0) {
                return curElem.toLowerCase();
            } else {
                return curElem.charAt(0).toUpperCase() + curElem.slice(1).toLowerCase();
            }
        })
        .join("");
}




console.log(toCamelCase('hello world'));
console.log(toCamelCase('afzal ahMed'));