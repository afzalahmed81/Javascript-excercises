// --------Practice 35: function that checks if an object is empty or not-------

const isEmptyObject = (obj)=> {
    // Method 1
    // for (let key in obj) {
    //     if (obj.hasOwnProperty(key)) {
    //         return `Object is not empty`;
    //     }
    // }
    // return `Object is empty`;

    // Method 2
    return Object.keys(obj).length === 0;

}


console.log(isEmptyObject({name: "Afzal"}));
console.log(isEmptyObject({}));
console.log(isEmptyObject({keyWithNull: null}));
console.log(isEmptyObject({keyWithUndefined: undefined}));