// --------Practice 17-B: function that converts a string into snake_case-------

const snake_case = (str) => {
    return str
        .trim()
        .split(/\s+/) // Splitting by one or more spaces
        
        .map(currElem => currElem.toLowerCase())
        .join("_");  // Joining with underscores
};




console.log(snake_case('hello world'));
console.log(snake_case('afzal ahMed'));
console.log(snake_case(' many     spaces  here'));