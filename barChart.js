// --------Practice 40: function that generates text based bar chart from array -------

// const generateBarChart = (arr) => {
//     const newArr = arr.map((curElem, index)=>{
//         let star = "";
//         let number = 0;
//         while(number < curElem) {
//             star = star + "*";
//             number++ ;
//         }
//         return `${index+1}: ${star}`
//     });
//     return newArr.join("\n") ;
// };

    // Method 2
    const generateBarChart =(arr) => {
        return arr.map( (curElem, index) => {
            return `${index + 1}: ${"*".repeat(curElem)}`;
        }).join("\n");
    }
    console.log(generateBarChart([3,5,1,7]));