// --------Practice 28, function that truncates a string ------

const truncateString = (str,num) => {

    return num <= 0 ? str : str.trim().slice(0, num).concat(" ... ");

    // Method 3
    // if (num <= 0) {
    //     return str ;
    // } else {
    // str = str.trim().split(" ").slice(0,num).join(" ");
    // return str + "...";
    // }
}

console.log(truncateString('A quick brown fox jumps over the lazy dog',28));