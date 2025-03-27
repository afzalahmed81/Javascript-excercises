// --------Practice 13: function which counts no. of vowels in a string-------

const countVowels = (str) => {
     let vowels = ['a', 'e', 'i','o','u'];
     let arr = str.split('');
     let count =0;
     for (let char of arr ) {  // A special loop that iterates over values of an iterable.
        if (vowels.includes(char.toLowerCase())) {
            count++ ;
        
        }
     }
     return count;
}



console.log(countVowels("Hello World"));
console.log(countVowels("A quick brown Fox"));