// --------Practice 17: function that finds minimum number from array of numbers-------

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