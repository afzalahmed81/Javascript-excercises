// --------Practice 39: function that calculates age of a Person -------

const calcAge = (birthDate) => {
    let curDate = new Date();
    birthDate = new Date(birthDate);
    let age = curDate.getFullYear() - birthDate.getFullYear() ;
    let monthDiff = curDate.getMonth() - birthDate.getMonth();
        if (monthDiff < 0 || monthDiff === 0 && curDate.getDate() < birthDate.getDate()) {
                age--;
        }
            return age;
}


console.log(calcAge("1985-01-01"),"years");