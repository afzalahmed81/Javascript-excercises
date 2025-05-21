// --------Practice 41: function that converts a currency into another depending on the rates provided -------

const rates = {
    USD: 1,
    EUR:0.9,
    GBP: 0.8,
    PKR: 281,
};
const convertCurrency = (amount, toCurr, fromCurr) => {
    let amountInUsd = 0;
        if (fromCurr !== 'USD') {
            amountInUsd = amount / rates[fromCurr];
        } else {
            amountInUsd = amount;
        }
    let convertedAmount = 0;
        if (toCurr !== 'USD') {
            convertedAmount = amountInUsd * rates[toCurr];
        } else {
            convertedAmount = amountInUsd;
        }
        return `Today on ${new Date().toLocaleDateString()}, ${amount} ${fromCurr} is equal to ${convertedAmount.toFixed(4)} ${toCurr}` ;
};

console.log(convertCurrency(100, "USD", "PKR"));
console.log(convertCurrency(1000, "EUR", "USD"));