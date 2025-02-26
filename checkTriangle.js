// --------Practic 04: Check triangle type-------

const checkTriangleType = (a,b,c) => {
    if (a===b && b===c) return "Triangle is Equilateral";
    if (a===b || b===c || a===c) return "Triangle is Isoscles";
    return "Triangle is Scalene";

}





console.log(checkTriangleType(3,3,3));  // Output Triangle is Equilateral
console.log(checkTriangleType(4,6,4));  // Output Triangle is isosceles
console.log(checkTriangleType(5,6,7));  // Output Triangle is Scalene