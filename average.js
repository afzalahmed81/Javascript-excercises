// --------Practice 09: function that computes average of numbers-------

const avgNum = (arr) => {
    
    let sum = arr.reduce((total , currElement) => total + currElement,0);
    let average = (sum/arr.length);
    return average ;
   
}



console.log(avgNum([1,2,3,4,5,6]));