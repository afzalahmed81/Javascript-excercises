// --------Practice 33: function that generates a Random hexa color-------
const randomHexCol = () => {
    return `#${Math.random().toString(16).slice(2,8).padEnd(6,0)}`;
}


console.log(randomHexCol());

