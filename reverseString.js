// --------Practice 20: function that reverses a string-------

const reverseString = (str) => {
    // return str.trim().split("")
    //     .map((_, index, array) => array[array.length - 1 - index])
    //     .join("");

    let r_str = "";
    for (let i= str.length-1 ; i >= 0 ; i--) {
        r_str = r_str + str[i];
    }
    return r_str ;

};

console.log(reverseString("hello")); // Output: "olleh"

