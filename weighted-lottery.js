// Object.keys
// bitwise operators

// 

const weightedLottery = weights => {
    //keep track of the weights
    //if i have an array a data base that can have ['green', yellow, 'yelow', 'red', 'red', 'red'] like a srcable bag
    let containerArray = [];

    Object.keys(weights).forEach(key => {
        for (let i = 0; i < weights[key]; i++) {
            containerArray.push(key);
        }
    })
/*
    return containerArray; //["green", "yellow", "yellow", "red", "red", "red"] o also ["winning", "losing", "losing", "losing", "losing", "losing", "losing", "losing", "losing", "losing", "losing"]
*/
    return containerArray[(Math.random() * containerArray.length) | 0];
}

const weights = {
    // green: 1,
    // yellow: 2,
    // red: 3,
    winning: 1,
    losing: 10
}

weightedLottery(weights);
/*
"losing"
"losing"
"losing"
"losing"
"losing"
"losing"
"winning"
"losing"
"losing"
"losing"
*/
