const isEqual = (obj1, obj2) => {
    const obj1Keys = Object.keys(obj1);
    const obj2Keys = Object.keys(obj2);

    if (obj1Keys.length !== obj2Keys.length) {
        return false
    }//the most common conditionals or most easy ones are placed at the top s you can make sure you dont waste any time processing unnecesarily
    
    for (let objKey of obj1Keys) {
      if(obj1[objKey] !== obj2[objKey]) {
        return false;
      }
    }
    
    return true;
}

const obj1 = {
    name: 'Kristine',
    age: 13
}

const obj2 = {
    name: 'Kristine',
    age: 13
}

// > obj1 === obj2;
// false

// > obj1 == obj2;
// false

// both objects are stored in a different part of memory so they are not perceived as equal

console.log(isEqual(obj1, obj2));
// true

// now this code can check if both elements are equal, But
// if yoi add different data structures such as a nested object to the elements inside the objects the you get the same old problem

const obj1 = {
    name: 'Kristine',
    age: 13,
    favourites: {
      meals: 'Pizza'
    }
}

const obj2 = {
    name: 'Kristine',
    age: 13,
    favourites: {
      meals: 'Pizza'
    }
}

// in order to circumvent that and get a more comprehesive behavior ef that kind of functionto get to know if an object is equal with another even with nested objects inside, 
// Use the lodash Library, they got what you need , they have the _.isEqual(object, other), that can check leves fo nested objects