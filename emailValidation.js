// --------Practice 44: function that validates email -------
const validateEmail= (email) => {
    return /^[A-Za-z0-9]+(?:[?:[.%_+][A-Za-z0-9]+)*@[A-Za-z0-9]+\.[A-Za-z]{2,}$/.test(email
    
    );
    
    };
console.log(validateEmail("afzalahmed@example.com"));    
console.log(validateEmail("afzal.ahmed@example.com"));
console.log(validateEmail("invalid..dod@example.com"));
console.log(validateEmail("missing@dotcom"));
console.log(validateEmail("no@domain"));
console.log(validateEmail("afzal1.ahme2d@example3.com"));
console.log(validateEmail("afzalahmed@example.pk"));
console.log(validateEmail("afzalahmed@example.c"));