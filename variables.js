// var is almost not use anymore in modern times. so don´t
var city = 'Cuatitlan'; 
> city;
'Cuatitlan'

// let does not pollute the global namespace, as var does
let citytwo = 'Casamar';
> citytwo;
'Casamar'
// if you add it into a function it is only going to be available to that function
// let could be overriden 

const cityThree = 'New York';//always try to use const, always 
> cityThree;
'New York'
/*
> cityThree = 'Phoenix';
Uncaught TypeError: Assignment to constant variable.
*/

// ----------
// VARIABLE DECONSTRUCTION
// ability to swap values

let playerOne = 'Tiffany';
let playerTwo = 'Kristine';

playerOne = playerTwo;
playerTwo = playerOne;

console.log(`
Player One: ${playerOne}
Player Two: ${playerTwo}
`);
// Player One: Kristine,
// Player Two: Kristine
//
let playerOne = 'Tiffany';
let playerTwo = 'Kristine';
// the following is horrible code so DOn´t
let tempPlayerOne = playerOne;
let tempPlayerTwo = playerTwo;

playerOne = tempPlayerTwo;
playerTwo = tempPlayerOne;

console.log(`
Player One: ${playerOne}
Player Two: ${playerTwo}
`);

/*
> playerOne = tempPlayerTwo;
'Kristine'
> playerTwo = tempPlayerOne;
'Tiffany'
> console.log(`
... Player One: ${playerOne}
... Player Two: ${playerTwo}
... `);

Player One: Kristine
Player Two: Tiffany
*/

// the nice way to do it is the following to swap values
let playerOne = 'Tiffany';
let playerTwo = 'Kristine';

[playerOne, playerTwo] = [playerTwo, playerOne];

console.log(`
Player One: ${playerOne}
Player Two: ${playerTwo}
`);
// Player One: Kristine
// Player Two: Tiffany