// javascript ebraces the concept of functional programming, so you can use the dode wherever you need it.
const toThePowerOf = (number, exponent) => {
    const items = Array(exponent).fill(number);//first start by creating the array
    const reducer = (total, currentValue) => total * currentValue; // you store the behavior you wat the reducer to make onside a variable so it can be easier to read
    return items.reduce(reducer); // now you call the reducer in the array (item) and apply the reducer behavior into th ereduce function
    
  }
  
  console.log(toThePowerOf(2, 3)); // 8
  console.log(toThePowerOf(12, 2)); // 144
  
  // so this is how you create an array from a function with 2 arguments
  console.log(Array(3).fill(2)); // [2, 2, 2]