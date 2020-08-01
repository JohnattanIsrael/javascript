function battingAverage() {
    var hits = 100;
    var atBats = 300;

    return {
        getCurrentAverage : function () {
            return (hits/atBats);
        },
        updateHitsAndAtBats: function (hit, atBat) {
            hits += hit;
            atBats += atBat;
        }
    }
}

var altuve = battingAverage();
altuve.getCurrentAverage();
altuve.updateHitsAndAtBats(0, 20);
// wrap up a set of behavior an dcall it however we need to
// when you have fucntions inside an object, those are called methods

> var altuve = battingAverage();
undefined
> altuve.getCurrentAverage();
0.3333333333333333
> altuve.updateHitsAndAtBats(0, 20);
undefined
> altuve.getCurrentAverage();
0.3125
>