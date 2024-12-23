
// --------Practic 01: find longest word from a string-------
const longestWord= (str)=> {
    if (str.trim().length===0){
        return false;
    }
// ------ method 1 ----------
//  word= str.split(" ");
// //  console.log(word);
//  word=word.sort((a,b) => b.length - a.length);
//  return word[0];
// //  console.log(word);

// -----method 2 ------  
word= str.split(" ");
 return word.reduce(
    (accum,currWord) => (currWord.length > accum.length ? currWord: accum),
    ""
 );
 };


let myStr="I am learning javascript , God help me";
let result=longestWord(myStr);

console.log(result);