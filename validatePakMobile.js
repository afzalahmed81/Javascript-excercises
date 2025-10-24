// --------Practice 46: function that validates Pakistani mobile number -------

const ValidPakMobile= (number) => {
    return /^((\+92)|0)3[0-9]{2}[0-9]{7}$/.test(number);
}

console.log(ValidPakMobile("03212816878"));
console.log(ValidPakMobile("3212816878"));
console.log(ValidPakMobile("+923212816878"));
console.log(ValidPakMobile("0321281687"));
console.log(ValidPakMobile("+9232128168781"));