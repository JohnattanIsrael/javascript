> var arr = ['Altuve', 'Bregman', 'Correa', 'Springer'];
undefined
> arr.length; //length is not a function is a property of an array
4
> arr;
[ 'Altuve', 'Bregman', 'Correa', 'Springer' ]
> arr.pop();
'Springer'
> arr.push('Baggwell');
4
> arr;
[ 'Altuve', 'Bregman', 'Correa', 'Baggwell' ]
> var elementPopped = arr.pop();
undefined
> elementPopped;
'Baggwell'
> arr.shift();
'Altuve'
> arr;
[ 'Bregman', 'Correa' ]
> arr.unshift('Kyle');
3
> arr;
[ 'Kyle', 'Bregman', 'Correa' ]
// ------remmove from the midle

> arr.splice(2, 1);
[ 'Correa' ]
> var arr = ['Altuve', 'Bregman', 'Correa', 'Springer'];
undefined
> var foundElement = arr.indexOf('Correa');
undefined
> foundElement;
2
> arr.splice(foundElement, 1);
[ 'Correa' ]//splice always returns an array
> arr;
[ 'Altuve', 'Bregman', 'Springer' ]
> arr.splice(1, 2);
[ 'Bregman', 'Springer' ]
> arr;
[ 'Altuve' ]

// DESTRUCTURING WITH ARRAYS
const apiList = [
    'https://api.dailysmarty.com/posts',
    'https://api.github.com/users/jordanhudgens/repos',
    'https://api.github.com/users/jordanhudgens'
  ]
// TAKE an element from the array and place it in a variable
// const post = apiList[0];
// we could do that over and over again for all the variables
// in order to to that for every element witha single line

const [posts, repos, profile] = apiList;
console.log(posts);
console.log(repos);
console.log(profile);
/*
> posts;
'https://api.dailysmarty.com/posts'
> repos;
'https://api.github.com/users/jordanhudgens/repos'
> profile;
'https://api.github.com/users/jordanhudgens'
*/

