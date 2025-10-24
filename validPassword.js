// --------Practice 45: function that validates email -------
function validatePassword(password)  {
    const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[\d])(?=.*[\W_]).{8,}$/ ;
    return regex.test(password) ;

}


console.log(validatePassword("P@ssw0rd"));
console.log(validatePassword("P@ssword"));
console.log(validatePassword("Passw0rd"));
console.log(validatePassword("p@ssw0rd"));
console.log(validatePassword("Asdfg_123"));