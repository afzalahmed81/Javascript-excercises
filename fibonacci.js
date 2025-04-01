// --------Practice 25: function that displays fibonacci series upto a number-------

const printFibonacci = (num) => {
    if (num < 0) return;     // base case

    let series = [];
    let prev = 0, curr = 1;

    for (let i = 0; i <= num; i++) {
        series.push(prev);
        [prev, curr] = [curr, prev + curr]; // Swap values
        
    }

    console.log(series.join(" , "));
};

printFibonacci(2);