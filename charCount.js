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




count= (countChar("Stunning","n"));
console.log(`The Character n ocurred ${count} times in the word Stunning`);