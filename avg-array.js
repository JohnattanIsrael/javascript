const getAverage = arr => {
    //sum the values from the array = use the reduce js function x = (y, z) => y + z
    const reducer = (total, currentValue) => total + currentValue;
    const sum = arr.reduce(reducer);

    //get the length of the array
    //divide the array´s sum by the length
    return sum/arr.length;
}

console.log(getAverage([1, 2, 3]));
// >10
