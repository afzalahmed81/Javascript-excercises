// --------Practice 19: function that checks if a character is uppercase or lowercase-------

const startsWith = (str, subStr) => {
    // return str.toLowerCase().startsWith(subStr.toLowerCase());

    // Method 2
    return str.toLowerCase().slice(0, subStr.length) === subStr.toLowerCase();
}





console.log(startsWith('Hello World', 'Hello'));
console.log(startsWith('Hello World', 'world'));