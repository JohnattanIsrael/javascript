// > function hiThere () {
//     ... console.log('hi there')
//     ... }
//     undefined
//     > hiThere();
//     hi there

function hiThereTwo () {
    return 'Hi there again';
}

hiThereTwo();

// variable Scope refers to where in the program the var is going to be , it could be global or inside a function

function greetingPre () {
    return 'Hi there';
}

// a function experssion is a funccion that is stored inside of a variable

var greeting = function () {
    return 'Hi there Again';
}; //you have to as a semicolon after a function expression 

var age = 3;
if (age <= 10) {
    var buildMenu = function () {
        return 'Kid´s menu';
    };
// function declaration should not be placed in blocks use function expression
    // function buildMenuTwo () {
    //     return 'Another kids meu'
    // }
    
    console.log(buildMenu());
    // console.log(buildMenuTwo());
}

function fullName (firstName, lastName) {
    return lastName.toUpperCase() + ', ' + firstName.toUpperCase();
}
fullName('Kristine', 'Hudgens');

// -------

function fullName (firstName, lastName , language) {
    var language = language || 'English';
    return lastName.toUpperCase() + ', ' + firstName.toUpperCase() + ' , ' + language;
}
fullName('Kristine', 'Hudgens');

// -----

function fullName(fName, lName) {
    console.log(`${fName} ${lName}`);
}
fullName('Elena', 'Martinez');
// Elena Martinez

fullName = function (fName, lName) {
    console.log(`${fName} ${lName}`);
}
fullName('Elena', 'Martinez');
// Elena Martinez

// ARROW FUNCTIONS =>

helloWorld = () => {console.log('Hi there');}
helloWorld()
// if you only need a single argument you dont need to use a parenthesis in the argument
firstName = fName => { console.log(fName.toUpperCase());}
firstName('Elena');
// now if you have multiple arguments
fullName = (fName, lName) => {
    console.log(`${fName} ${lName}`);
}
fullName('Elena', 'Martinez')

// DECONSTRUCTION - COMBINE OBJECTS AND FUNCTIONS

const user = {
    name: 'Kristine',
    email: 'kristine@devcamp.com'
}

const renderUser = ({ name, email}) => {
    console.log(`${name}: ${email}`);
}

renderUser(user);
// Kristine: kristine@devcamp.com


const bank = {
    accountNum: 454812259,
    name: 'John Doe',
    balance: 1257
  }
  
  const bankInfo = ({accountNum, name, balance}) => {
    return (`Hi ${name}! Your current balance is $${balance}. Account#: ${accountNum}.`);
  }
  
  console.log(bankInfo(bank));
  bankInfo(bank);



// BIND FUNCTION

const userOne = {
    firstName: 'Krsitine',
    lastName: 'Hudgens'
}

const userTwo = {
    firstName: 'Tiffany',
    lastName: 'Hudgens'
}
// connect a function with an object
const fullName = function() {
    return `${this.lastName}, ${this.firstName} `;
}

const kristine = fullName.bind(userOne);
const tiffany = fullName.bind(userTwo);

kristine();
// 'Hudgens, Krsitine '
tiffany();
// 'Hudgens, Tiffany '

// the reason because we did not use an arrow function

const fullNameTwo = () => {
    return `${this.lastName}, ${this.firstName} `;
}

const kristineTwo = fullNameTwo.bind(userOne);

kristineTwo();
// 'undefined, undefined '
// so better use the normal function expression like before
