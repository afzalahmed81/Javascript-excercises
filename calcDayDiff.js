// --------Practice 38: function that calculates difference of days between two dates -------

const calcDayDiff = (d1, d2) => {
    // let curDate = new Date();
    // // console.log(curDate);
    // console.log(curDate.toLocaleDateString());
    // console.log(curDate.toLocaleTimeString());
    let day1 = new Date(d1);
    let day2 = new Date(d2);
    let diff = Math.abs(day2 - day1) ;
    return diff/(24*60*60*1000);
};
    

console.log(calcDayDiff("2025-01-01","2025-01-31"));
