// --------Practic 05: Array of numbers Sorting in an ascending order-------

const sortAscending = (arr)=>{
    sortedarr = arr.sort((a,b)=> a-b);
    return sortedarr ;
}


console.log(sortAscending([19,4,7,2,10,9,8,6]));  // Output [2,4,6,8]