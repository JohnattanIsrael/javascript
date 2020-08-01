// how do they work at a hight level?
// javascript has an asynchronous 
// the old common convention was to call the Promise arguments the following : new Promise((succes, failure or error))
let sleepyGreeting = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Hello....')
    }, 2000);
    // the setTimeout is expected because it Will need time to happen
      setTimeout(() => {
      reject(Error('Too sleepy...'))
    }, 2000);
  });
  // the coommon convention when working with promises is use multiple lines because promises can be very complex, though you could write it all in one line
  // this is what happens if everything goes right
  sleepyGreeting
      .then(data => {
    console.log(data);
  })//then and data are there purposely ,
  .catch(err => {
    console.log(err);
  }); //data is to then as err is to catch - then/data is when the data succesfully gets back and catch/err is when the data does not come back
  /*
  it waited two seconds (2000 miliseconds) and then returned
  "Hello...."
  */
  
  // NOW we are going to mimic an error by commenting out the succes data
  let sleepyGreetingTwo = new Promise((resolve, reject) => {
    // setTimeout(() => {
    //   resolve('Hello....')
    // }, 2000);
    
      setTimeout(() => {
      reject(Error('Too sleepy...'))
    }, 2000);
  });
  sleepyGreetingTwo
      .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.log(err);
  });
  /*and for the error it returned after 2 seconds:
  [object Error] {}
  */

// FETCH PROMISE TO COMMUNICATE WITH AN API

console.log('starting fetch call');
// the javascript dev team placed a promise inside the fetch fucntion , so when you call it you will be getting a promise back
const postPromise = fetch('https://api.dailysmarty.com/posts');
console.log('After fetch Call');// the promise by itself does not do much, fetch bringsback a promise, you then have to do something with it.
console.log(postPromise);
console.log('After program has run');

postPromise// with arrow functions you can just use implicit returns inseat of saying { return bla bla}
    .then(data => data.json())// we need to define it,  we need to convert all the data into json so we can 
    .then(data => {
      data.posts.forEach((item) => {
        console.log(item.title);
        console.log(item.url_for_post);
      });
    })//so this is not the same data as v¿before, this data is now the one that was formatted json.
    .catch((err) => {
      console.log(err);
    });
// fetch gives us the ability to comunicate with APIs

// PROMISE ALL

// this is how you ca everage Promise.all() so you can write more efficiente code and easier to read
const greeting = new Promise ((resolve, reject) => {
    resolve('Hi there');
    reject('oops, bad greeting');
});

const updateAccount = new Promise ((resolve, reject) => {
    resolve('Updating logging...');
    reject('Error updating account with login');
});

const loginActivities = Promise.all([greeting, updateAccount]);
console.log(loginActivities); //get get a promise back: [object Promise] {} -----is a diferebnt type of promise becaus eit has multiple promises inside

loginActivities.then(response => {
  console.log(response); //["Hi there", "Updating logging..."]
  response.forEach(activity => {
    console.log(activity);
    /*
    "Hi there"
    "Updating logging..."
    */ // as you see we can iterate over  , forEach allows us to iterate over the array
  })
}) 
