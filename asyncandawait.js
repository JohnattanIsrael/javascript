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
