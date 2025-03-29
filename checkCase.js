// --------Practice 18: function that checks if a character is uppercase or lowercase-------

const checkCase = (char) => {
    return char === char.toUpperCase() ? `${char} is Uppercase` : `${char} is lowercase`;

    // Method 2
    // if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) { // checks if the character is uppercase or not
    //     return true ;
    // } 
    // return false ;
}





console.log(checkCase("P"));
console.log(checkCase("s"));