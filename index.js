// function runFiveMiles() {
//     console.log("Go for a five-mile run");
// }

// function liftWeights() {
//     console.log("Pump iron");
// }
  
// function swimFortyLaps() {
//     console.log("Swim 40 laps");
// }

// function Monday() {
//     exerciseRoutine(liftWeights);
// }

// function exerciseRoutine(postRunActivity) {
//     runFiveMiles();
//     postRunActivity();
// }

// function morningRoutine(exercise) {
//     let breakfast;
    
//     if (exercise === liftWeights) {
//         breakfast = 'protein bar';
//     } else if (exercise === swimFortyLaps) {
//         breakfast = 'kale smoothie';
//     } else {
//         breakfast = 'granola';
//     }

//     exerciseRoutine(exercise);

//     return function() {
//         console.log(`Nom nom nom, this ${breakfast} is delicious!`);
//     };
// }

function receivesAFunction(callback) {
    return callback();
}

function returnsANamedFunction() {
    function hasAName() {
        console.log('This one is named')
    };
    return hasAName;
}

function returnsAnAnonymousFunction() {
    return function() {
        console.log('This one is anonymous')
    };
}