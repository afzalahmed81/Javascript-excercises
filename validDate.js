// --------Practice 49: function that validates the date using regex-------
const isValidDate = (dateStr) => {
    const regex = /^(0?[1-9]|1[0-2])\/(0?[1-9]|[12][0-9]|3[01])\/((19|20)\d\d)$/;
         if (!regex.test(dateStr)) return false;

     const [month, day, year] = dateStr.split('/').map(Number);

     const date = new Date(year, month - 1, day);

     // Validate actual calendar date (handles leap years)
        return (
         date.getFullYear() === year &&
         date.getMonth() === month - 1 &&
         date.getDate() === day
     );
}

console.log(isValidDate("12/15/2021"));
console.log(isValidDate("12/15/1800"));
console.log(isValidDate("13/15/2021"));
console.log(isValidDate("12/32/2021"));
console.log(isValidDate("02/01/2000"));
console.log(isValidDate("10/29/2099"));
console.log(isValidDate("02/30/2021"));