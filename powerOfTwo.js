// --------Practice 14: function checks if an integer is power of two-------

const powerOfTwo =(num) => {
    // let flag = num %2 ===0 ? "Power of Two" : "Not a Power of Two";
    // return flag ;

    // Method 2
    // let flag= false;
    // for (let i=1 ; i<num ; i++) {
    //     if (2**i === num) {
    //         flag = true;
    //     }
    // }
    // return flag ;

    // Method 3 using Bitwise operator

           let flag = (num > 0 && (num & (num - 1)) === 0) ? "Power of Two" : "Not a Power of Two";
        return flag;


}




console.log(powerOfTwo(8));
console.log(powerOfTwo(9));