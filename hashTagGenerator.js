// --------Practic 02: Hashtag Generator function-------

const generateHash = (str) => {
    if (str.length > 200 || str.trim().length === 0){
        return false
}
str= str.split(" ");
str= str.map(
    (currElem) => 
        // currElem.replace(currElem[0],currElem[0].toUpperCase())          // Method 01
        currElem.charAt(0).toUpperCase() + currElem.slice(1)                // Method 02
);
str= `#${str.join("")}`;
// console.log(str);
return str;
};



console.log(generateHash("My name is Afzal Ahmed"));


