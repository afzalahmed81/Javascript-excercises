// --------Practice 12: function which remove duplicates from an array-------

const removDuplicates = (arr) => {
    let newArr = [...new Set(arr)];
    //console.log(newArr);

    return newArr

}



console.log(removDuplicates([1,2,3,1,2,4,5]));
console.log(removDuplicates([]));
