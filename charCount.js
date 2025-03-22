// --------Practic 03: Count Occurences of a character in a given word-------

const countChar = (word,char) => {
    word = word.toLowerCase();
    char = char.toLowerCase();
    totalCount = word.split("").reduce((acuum, curChar)=> {
        if (curChar===char) {
            acuum++ ;
        }
        return acuum
    },0)

    return totalCount;
}



let word= "Stunning";
let char='u';
count= (countChar(word,char));
console.log(`The Character ${char} ocurred ${count} times in the word ${word}`);