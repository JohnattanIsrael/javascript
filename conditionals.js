var age = 8;
var ageTwo = 12;
// thwo = is not ar strict because it still allows string combine with numbers
if (age == ageTwo) {
    console.log('they are equal')
}

var age = 12;
var ageTwo = 12;
// estrict, USE THIS ONE
if (age === ageTwo) {
    console.log('they are equal')
}

if (age !== ageTwo) {
  console.log('not equal');
}
if (age != ageTwo) {
  console.log('not equal');
}

if ( age >=  25) {
  console.log('old enough to rent a car')
}

if ( age <=  10) {
  console.log('you can eat from the kids menu')
}


var age = 30;

if (age <= 10) {
  console.log('You can eat from the kids menu')
  console.log('You are not old enoug to drive')
  console.log('You are not old enough to rent a car')
} else if (age >= 16 && age < 25){
  console.log('You can not eat from the kids menu');
  console.log('You are old enoug to drive');
  console.log('You are not old enough to rent a car');
} else if (age >= 25) {
  console.log('You can not eat from the kids menu');
  console.log('You are old enoug to drive');
  console.log('You are old enough to rent a car');
}

// 
var dataPoint = 'Hi there';
var otherDataPoint = {};

switch (typeof otherDataPoint) {
    case 'string':
        console.log('It is a string');
        break;
    case 'number':
        console.log('Its a number');
        break;
    case 'boolean':
        console.log('Its either true or false');
        break; 
    default:
        console.log('No matches')
}
// No matches

// TERNARY OPERATOR
// c0onditionals in react or view - JSX
//  we are saying if has permission I want you to return active and if not the disabled
// <div className = {hasPersmission ? 'active' : 'disabled'}></div>
// normal way
function ageVerificationPreview(age) {
    if ( age > 25) {
        console.log('can rent a car')
    }else{
        console.log('not old enough')
    }
}

ageVerificationPreview(55)

// > ageVerificationPreview(55);
// can rent a car
// undefined

// trenary operators way-
function ageVerification(age) {
    //    let answer = age > 25 ? console.log('can rent a car') : console.log('cant rent a car not old enoug');
    let answer = age > 25 ? 'can rent a car' : 'cant rent a car not old enoug';
    console.log(answer)
}
ageVerification(55)
// > ageVerification(55)
// can rent a car
// undefined
// > ageVerification(5)
// cant rent a car not old enoug
// undefined

// THE FOLLOWING IS NOT RECOMMENDED TO USE
// compound logic

function adminControls(user) {
    if (user) {
        if (user.admin) {
            console.log('showing admin cntrols');
        } else {
            console.log('you need to be and admin');
        }
    } else {
    console.log('You need to be logged in');
    }
}

let userOne = {
  name : 'Krissten',
  admin : true
}
adminControls(userOne);

let userTwo = {
  name : 'Tiffany',
  admin : false
}
adminControls(userTwo);

let userThree = null
adminControls(userThree);

// ------------------the following is what must not be done , because id difficult to read

function adminControls2(user) {
    // if (user) {
    //     if (user.admin) {
    //         console.log('showing admin cntrols');
    //     } else {
    //         console.log('you need to be and admin');
    //     }
    // } else {
    // console.log('You need to be logged in');
    // }
    let response = user ? (user.admin ? 'Showing admin controsl' : 'You need to be an admin') : 'You need to be logged in'
}

// INTEGRATING CONTDITIONALS WITH TERNATY OPERATORS IN A STRING
let page = 'Home';
console.log(`class=${ page === 'Home' ? 'master-layout' : 'secondary-layout'}`);