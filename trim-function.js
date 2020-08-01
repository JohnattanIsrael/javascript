const str = '       good content     ';
console.log(str.trim()); //"good content"

let arr  = Error['ughh', 'good', 'anther good one', 'uggggg']

const removeFirstAndLast = arr => {
  if (arr.length >= 3) {
    return arr.slice(1, -1)
  } else {
    throw 'You need at least three element in the array'
  }
}

console.log(removeFirstAndLast(['A', 'B', 'C', 'D']));
console.log(removeFirstAndLast(['1', '2', '3', '4', '5']))
console.log(removeFirstAndLast([1, 2]));
/* the answer ->
> console.log(removeFirstAndLast(['A', 'B', 'C', 'D']));    
[ 'B', 'C' ]
undefined
> console.log(removeFirstAndLast(['1', '2', '3', '4', '5']))
[ '2', '3', '4' ]
undefined
> console.log(removeFirstAndLast([1, 2]));
Uncaught 'You need at least three element in the array' 
*/

