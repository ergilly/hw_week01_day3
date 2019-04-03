// ## Episode 1 ##

const scenario = {
  murderer: 'Miss Scarlet',
  room: 'Library',
  weapon: 'Rope'
};

const declareMurderer = function() {
  return `The murderer is ${scenario.murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);

// The murderer is Miss Scarlet
// the constant 'scenario' cannot be changed after it is declared

// ## Episode 2 ##

const murderer = 'Professor Plum';

const changeMurderer = function() {
  murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

// Error Assignment to constant Variable
// const of 'murderer' cannot be changed

// ## Episode 3 ##

let murderer = 'Professor Plum';

const declareMurderer = function() {
  let murderer = 'Mrs. Peacock';
  return `The murderer is ${murderer}.`;
}

const firstVerdict = declareMurderer();
console.log('First Verdict: ', firstVerdict);

const secondVerdict = `The murderer is ${murderer}.`;
console.log('Second Verdict: ', secondVerdict);

//First Verdict: Mrs. Peacock
//Second Verdict: Proffessor Plum
// using let for 'murderer' means it can be changed, though the line it becomes Mrs Peacock is block scope so it goes back to Prof Plum when the variable is taken from outside the function.

// ## Episode 4 ##

let suspectOne = 'Miss Scarlet';
let suspectTwo = 'Professor Plum';
let suspectThree = 'Mrs. Peacock';

const declareAllSuspects = function() {
  let suspectThree = 'Colonel Mustard';
  return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
}

const suspects = declareAllSuspects();
console.log(suspects);
console.log(`Suspect three is ${suspectThree}.`);

// The suspects are Miss Scarlet, Proffessor Plum, Colonel Mustard.
// Suspect three is Mrs Scarlet
// the suspects are declared in a function though the line 'let suspectThree = 'Colonel Mustard';' is block scoped
// the second log is pulling 'suspectThree' from outside the function so it goes back to Mrs Peacock

// ## Episode 5 ##

const scenario = {
  murderer: 'Miss Scarlet',
  room: 'Kitchen',
  weapon: 'Candle Stick'
};

const changeWeapon = function(newWeapon) {
  scenario.weapon = newWeapon;
}

const declareWeapon = function() {
  return `The weapon is the ${scenario.weapon}.`;
}

changeWeapon('Revolver');
const verdict = declareWeapon();
console.log(verdict);

// The weapon is the Revolver.
// even though the scenario is const, the contents of the object can be changed

// ## Episode 6 ##

let murderer = 'Colonel Mustard';

const changeMurderer = function() {
  murderer = 'Mr. Green';

  const plotTwist = function() {
    murderer = 'Mrs. White';
  }

  plotTwist();
}

const declareMurderer = function () {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

// The murderer is Mrs White.
// The murderer is modifiable as it was created using 'let'
// the murderer is changed in both 'changeMurderer' and 'plotTwist'

// ## Episode 7 ##


const changeMurderer = function() {
  murderer = 'Mr. Green';

  const plotTwist = function() {
    let murderer = 'Colonel Mustard';

    const unexpectedOutcome = function() {
      murderer = 'Miss Scarlet';
    }

    unexpectedOutcome();
  }

  plotTwist();
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

// The murderer is Miss Scarlet.
// murderer starts as a global variable but is changed in plotTwist to 'let', after this the value us changed again to Miss Scarlet in unexpectedOutcome.

// ## Episode 8 ##

const scenario = {
  murderer: 'Mrs. Peacock',
  room: 'Conservatory',
  weapon: 'Lead Pipe'
};

const changeScenario = function() {
  scenario.murderer = 'Mrs. Peacock';
  scenario.room = 'Dining Room';

  const plotTwist = function(room) {
    if (scenario.room === room) {
      scenario.murderer = 'Colonel Mustard';
    }

    const unexpectedOutcome = function(murderer) {
      if (scenario.murderer === murderer) {
        scenario.weapon = 'Candle Stick';
      }
    }

    unexpectedOutcome('Colonel Mustard');
  }

  plotTwist('Dining Room');
}

const declareWeapon = function() {
  return `The weapon is ${scenario.weapon}.`
}

changeScenario();
const verdict = declareWeapon();
console.log(verdict);

// The weapon is Lead Pipe
// even though scenario is a constant its constant can be changed.
// changeScenario changes the murderer and room.
// plotTwist changes the murderer.
// unexpectedOutcome changes the weapon to candle stick.

// ## Episode 9 ##

let murderer = 'Professor Plum';

if (murderer === 'Professor Plum') {
  let murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);

// The murderer is Proffessor Plum
// murderer is defined with "let" so in order for it to change to Mrs peacock, there cannot be another 'let' statement

// ## Episode 10 - The Phantom Variable ##

let murderer = 'Miss Scarlet';

const changeMurderer = function(suspect) {
  murderer = suspect;

  const plotTwist = function() {
    if (murderer.length == 12) {
      murderer = 'Professor Plum';
    } else if (murderer.includes('Mustard')) {
      murderer = 'Mrs Peacock'
    }

  }
  plotTwist()
}

changeMurderer('Colonel Mustard')

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);
