// callback hell - what is that?, a process you needed to build b¿complex proceses, inwich you decide betwen different processes
const login = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve('User logged in...');
        }, 2000);//the setTimeout mimics a process that doees not happen right away
    });//we wont write a reject for this example
}

const updateAccount = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve('Updating last login...');
        }, 2000);
    });//we wont write a reject for this example
}
// ok so the last two element need to happen simultaneously nut need to not be used in th esame time, we need to login before we can update the last login, so we decide that with async,  as in asyncrhonous function
// we are telling them when and in what order we want the processes to happen or b¿to be returned
async function loginActivities() {
    const returnedLogin = await login(); //this is calling the login function , and by prepanding await, its saying, i dont want anythin else to accur before this process has completes and once completed we´ll stored it in the returnedlogin
    console.log(returnedLogin); //wait two seconds and then - "User logged in..."
    
    const retunedUpdateAccount = await updateAccount();
    console.log(retunedUpdateAccount);
}

loginActivities();//(after 2000miliseconds) "User logged in..."
/*
2seconds
"User logged in..."
and the 2 seconds
"Updating last login..."
*/

// NOW COMBINING PROMISES & AWAIT
const login = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve('User logged in...');
        }, 4000);
    });
}

const updateAccount = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve('Updating last login...');
        }, 2000);
    });
}

async function loginActivities(login, updateAccount) {
    const returnedLogin = await login; 
    console.log(returnedLogin); 
    
    const retunedUpdateAccount = await updateAccount;
    console.log(retunedUpdateAccount);
}

loginActivities(login(), updateAccount());
// now its not going to show anythng on the screen untill it prerforms both processes, so t will take 4 seconds, and the show all of the returned values, or even better we cchange the first one to wait 4000 miliseconds so now will take 6 seconds to return thw followig at the same time:
/*
"User logged in..."
"Updating last login..."
*/
// a closure is a function that can be wrap inside of a variable, and then it can be passed into othe functions

// NOW WE USE AWAIT AND ASYNC TO COMMUNIATE WITH OUTSIDE API

// https://api.github.com/users/JohnattanIsrael/repos
// http://api.dailysmarty.com/posts

async function queryApis() {
    const postPromise = fetch('https://api.dailysmarty.com/posts');
    const posts = await postPromise.then(response => response.json());
    console.log(posts);
    
    const reposPromise = fetch('https://api.github.com/users/JohnattanIsrael/repos');
    const repos = await reposPromise.then(response => response.json());
    console.log(repos);
}

queryApis();
// because we used async and await together we can be sure of the roder of aparition of the returned objects

/*
{posts: Array(10)}posts: (10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
------
(6) [{…}, {…}, {…}, {…}, {…}, {…}]
*/

// SO WHAT HAPPENS IF THE APIs DOES NOT WORK(WHICH IS VERY COMMON)
// a diffeerent way to catcing errors

// https://api.github.com/users/JohnattanIsrael/repos
// http://api.dailysmarty.com/posts

async function queryApis() {
    try{
      const postPromise = fetch('http://api.dailysmarty.com/posts');//in this case we are calling http instead of https
      const posts = await postPromise.then(response => response.json());
      console.log(posts);
    
      const reposPromise = fetch('https://api.github.com/users/JohnattanIsrael/repos');
      const repos = await reposPromise.then(response => response.json());
      console.log(repos);
    } catch(err) {
        console.log(err);
    }
}

queryApis();
// TypeError: Failed to fetch <-----------------
// the whole process got haulted

// But if th error occurs in the second process, the the first one does get printed

async function queryApis() {
    try{
      const postPromise = fetch('https://api.dailysmarty.com/posts');
      const posts = await postPromise.then(response => response.json());
      console.log(posts);
    
      const reposPromise = fetch('http://api.github.com/users/JohnattanIsrael/repos');//in this case we are calling http instead of https
      const repos = await reposPromise.then(response => response.json());
      console.log(repos);
    } catch(err) {
        console.log(err);
    }
}

queryApis();
// {posts: Array(10)}
// TypeError: Failed to fetch

// you are not told where was the problem so what you can do is:
// the industry aproach to this problems


async function queryApis() {
    try{
      const postPromise = fetch('http://api.dailysmarty.com/posts');//in this case we are calling http instead of https
      const posts = await postPromise.then(response => response.json());
      console.log(posts);
    } catch(err) {
        console.log(err);
        console.log('there was an err with the daily smarty api');
    }
    try{
      const reposPromise = fetch('https://api.github.com/users/JohnattanIsrael/repos');
      const repos = await reposPromise.then(response => response.json());
      console.log(repos);
    } catch(err) {
        console.log(err);
        console.log('there was an err with the GitHub api');
    }
}

queryApis();
// TypeError: Failed to fetch
// there was an err with the daily smarty api
// (6) [{…}, {…}, {…}, {…}, {…}, {…}]
// in this last case the second process did happen even if the first did not work

// you may want to sometimes have the entire process stoped when there is an error for expample when you ar running an authentication process, and want the other processes to not even happen if the first test(promise) was not passed, so you can ask your self if the prosses has happen in the same try catch element or in separated ones,  



