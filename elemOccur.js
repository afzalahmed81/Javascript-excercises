// --------Practice 23: function that counts occurence of an element in an array-------


const elemOccur = (arr) => {
    arr.sort( (a,b) => a-b) ;
    const counts = {} ;
    for (let element of arr) {
        counts[element] = (counts[element] || 0) + 1 ;
    }
    return counts ;
}





console.log(elemOccur([1,2,2,3,4,5,5,2]));