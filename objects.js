var user = { name: 'Kristine'}
// > user
// { name: 'Kristine' }
// > user.name
// 'Kristine'

user.name = 'jordan';
// > user.name = 'jordan';
// 'jordan'
// > user
// { name: 'jordan' }

// OBJECT
var user = {
    name: 'Kristine',
    age: 12,
    city: 'Scoottdale',
    grades: {
        math :90,
        science :80,
        language: 100
    }
}
// > user.city
// 'Scoottdale'
// > user.age
// 12
// > user.name
// 'Kristine'
// > user.grades
// { math: 90, science: 80, language: 100 }
// > user.grades.science
// 80
// ADD VALUES AT RUNTIME
user.grades.coding = 99;
// > user.grades
// { math: 90, science: 80, language: 100, coding: 99 }

// > user
// {
//     name: 'Kristine',
//     age: 12,
//     city: 'Scoottdale',
//     grades: { math: 90, science: 80, language: 100, coding: 99 }        
//   }

// WHAT TYPE F DATATYPE 

// > typeof 12;
// 'number'
// > typeof 'Astros';
// 'string'
// > typeof true
// 'boolean'
// > typeof {name :'kristine'}
// 'object'
// > typeof ageTwo;
// 'undefined'

// TYPE CASTING
// > '100' - 42
// 58
// > 100 + null
// 100
// > 100 + null;
// 100
// > '100' + 42;
// '10042'
// > 42 + '100'
// '42100'
// // convert numbers into strings
// > var ageOne = 12;
// undefined
// > String(ageOne);
// '12'
// > ageOne.toString();
// '12'
// > var ageTwo = '33';
// > Number(ageTwo);
// 33
// > parseInt(ageTwo);
// 33
// // to return a decimal
// > parseFloat('33.5');
// 33.5
// > parseInt('33.5');
// 33
// > parseInt('55555555');
// 55555555
// // not a number
// > parseInt('fooo 5555555')
// NaN

// > + ageTwo;
// 33

var someUser = {
    name: 'Jordan'
}

function nameFormatter (someUser) {
    return user.name = 'Ooops';
}
// if you pass an object it also overides the var
> nameFormatter(someUser)
'Ooops'
> someUser;
{ name: 'Ooops' }

var someName = 'Tiffany';
function someOtherNameFormatter(name) {
    return name = 'Ooops';
}
someOtherNameFormatter(someName)
// > someOtherNameFormatter(someName)
// 'Ooops'
> someName;
'Tiffany'

// how can you pass an object through a function without affecting it
> someOtherNameFormatter(someName)
'Ooops'
> someName;
'Tiffany'
> someUser.name = 'Kristine';
'Kristine'
> someUser.name;
'Kristine'
> nameFormatter(someUser.name);
'Ooops'
> someUser.name;
'Kristine'
>


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


// set deafult values with objects

const blog = {
    title: 'My great post',
    summary: 'Summary of the post'
}

const openGraphMetadata = ({ title, summary = 'A daily smarty post'}) => {
    return `og-title= ${title}
    og-description= ${summary}
    `;
}

openGraphMetadata(blog);

const blogTwo = {
    title: 'My great post without summary',
}
// 'og-title= My great post\n    og-description= Summary of the post\n 
//    '
const openGraphMetadata = ({ title, summary = 'A daily smarty post'}) => {
    return `og-title= ${title}\n
    og-description= ${summary}
    `;
}
// 'og-
 '

openGraphMetadata(blogTwo);


// -------
const user = {
    username: 'Johnattan',
    status: 'away'
}

const loginEvent = status => {
    status = 'active';
    return 'your_username is active'
}

loginEvent(user);
// 'your_username is active'
