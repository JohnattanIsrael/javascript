// ITERATE OVER A COLLECTION OF DATA
var players = [
    'Altuve',
    'Bregman',
    'Correa',
    'Springer'
];

// variable, condition, incrementer
for (var i = 0; i < players.length; i++) {
    console.log(players[i]);
};
// 
for (var i = 0; i <= (players.length - 1); i++) {
    console.log(players[i]);
};
 
// For In

for (player in players) {
    console.log(player); //player represents the index
    console.log(players[player]);
};

// for each

players.forEach(function(element) {
    console.log(element);
});

// ITERATE OVE AN OBJECT

var student = {
    name: 'Kristine',
    age: 12,
    city: 'Scottsdale'
};

for (var key in student) {
    console.log(key + ' => ' + student[key]);
};

// > for (var key in student) {
//     ...     console.log(key + ' => ' + student[key]);
//     ... };
//     name => Kristine
//     age => 12
//     city => Scottsdale

for (var key in student) {
    console.log(key + ' => ' + student[key]);
};

// while loop - checks for the conditional at the begginning

var i = 0;
while (i < players.length) {
    console.log(players[i]);
    i++;
}

// do while - it does its conditional check after, at the end

var i = 0;
do {
    console.log(players[i]);
    i++;
} while (i < players.length)