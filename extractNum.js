// --------Practice 47: function that extracts number from a string using regex -------

const extractNumbers = (str) => {
    let regex = /\d+/g;
    return str.match(regex);
}

console.log(extractNumbers("abc123def456ijk789"));
console.log(extractNumbers("0123Flower-456i_jk789$9"));