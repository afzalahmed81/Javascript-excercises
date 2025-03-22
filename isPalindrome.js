// --------Practic 06: Check whether the given string is a Plindrome or not-------

const isPalindrome= (str) => {
    str = str.toLowerCase().replace(/\W/g,""); // rplace() method here removes spaces and special functions between words
    let r_str = str.split("").reverse().join("");
    console.log("word =",str);
    console.log("Reversed =",r_str);
    return str===r_str ? true : false;

}


console.log(isPalindrome("A man, a plan, a canal, Panama")); // Output true
console.log(isPalindrome("Racecar")); // Output true
console.log(isPalindrome("hello")); // Output False
