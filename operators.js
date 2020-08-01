> 2 + 2;
4
> (2 + 2);
4
> 2 - 3 ;
-1
> 10 / 2 ;
5
> 2 * 10;
20
> 2 ** 10;
1024
> 5 % 2;
1
> 10 % 2;
0
> 22222 % 2;
0
> 6 % 2;
0
// post fix notation- it returns the previous value first 
> var num = 2;
undefined
> num ++;
2
> num;
3

// prefix notation
> ++num;
4
> num;
4
// -----
> num--;
4
> num;
3

> --num;
2
> num;
2

// > 2++;
// 2++;
// ^
// Uncaught SyntaxError: Invalid left-hand side expression in postfix operation

> var someNum = 10;
undefined
> var someOtherNum = -someNum;
undefined
> someOtherNum;
-10

> var stringNum = '100';
undefined
> var convertedNum = + stringNum;
undefined
> convertedNum;
100

// Compound Assignment Operator

> var sum = 0;
> var gradeOne = 100;
> var gradeTwo = 80;
> sum += gradeOne;
100
> sum += gradeTwo;
180
>

/*PEMDAS
Parenthesis
Exponentd
Multiplicatio
Division
Addition
Substaction

Please Excuse My Dear Aunt Sally
*/

// INTEGRATING CONTDITIONALS WITH TERNATY OPERATORS IN A STRING
let page = 'Home';
console.log(`class=${ page === 'Home' ? 'master-layout' : 'secondary-layout'}`);


// SPREAD OPERATOR

// combining arrays -shopping cart example
let shoppingCart = [345, 375, 765, 123];
let newItems = [98, 123];

shoppingCart.push(newItems);
/*
> shoppingCart.push(newItems);
5
> shoppingCart;
[ 345, 375, 765, 123, [ 98, 123 ] ]
>
*/ // so this is what happens when you add it, it adds it as a nested array
// but if you add the three dots:
shoppingCart.push(...newItems);
/*
> shoppingCart.push(...newItems);
6
> shoppingCart;
[ 345, 375, 765, 123, 98, 123 ]
>
*/
// COPYING ARRAYS
const shoppingCart = [345, 375, 765, 123];
// the Common convention is that in react or angular you do not modify or change a data structure, you create another one with the new values
// Because you don´t want to change the data structure and then brake other parts of the program
// the following is the wrong way because it does not work
const shoppingCart = [345, 375, 765, 123];
const updatedCart = shoppingCart;
updatedCart.push(5);
console.log(updatedCart);//[345, 375, 765, 123, 5]
// but it actually chagedalso the one data structure we did not wanted to change. 
console.log(shoppingCart);//[345, 375, 765, 123, 5] 

// this is the old way to do it
const shoppingCart = [345, 375, 765, 123];
const updatedCart = shoppingCart.slice(); //the slice creates a copy of the shopping cart 
updatedCart.push(5);
console.log(updatedCart);//[345, 375, 765, 123, 5]
// this one seems to work
console.log(shoppingCart//[345, 375, 765, 123]
 
    
// this is the Cool way to do it
const shoppingCart = [345, 375, 765, 123];
const updatedCart = [...shoppingCart]; //you add the Spread operator ... 
updatedCart.push(5);
console.log(updatedCart);//[345, 375, 765, 123, 5]
// this one also acomplishes tthe goal
console.log(shoppingCart)//[345, 375, 765, 123]


Math.max(1, 5, 1, 10, 2, 3);
// 10 - this one show the highest number, because Math.max is pasing them as 6 function argumnets
// beut when we try to pass a list for example:
const orderTotals = [1, 5, 1, 10, 2, 3];
Math.max(orderTotals);
// NaN -- it returns not a number because it only detects one element and is a [list]
// so to fix this we can add the spread operator and it will divide the content of the list and spread them into their own element
const orderTotals = [1, 5, 1, 10, 2, 3];
Math.max(...orderTotals);
// 10

// DECONSTUCTION WITH THE SPREAD OPERATOR
const = {
    starter: 'Verlander',
    closer: 'Giles',
    relief_1: 'Morton',
    relief_2: 'Gregerson'
}

// In this case you may have some attributes that may be different each time, so in order for you to call them you can use the spread operator
const {starter, closer, ...relievers} = {
    starter: 'Verlander',
    closer: 'Giles',
    relief_1: 'Morton',
    relief_2: 'Gregerson'
}

console.log(starter);
console.log(closer);
console.log(relievers);
/*
"Verlander"
"Giles"
Object {
  relief_1: "Morton",
  relief_2: "Gregerson"
}
*/

