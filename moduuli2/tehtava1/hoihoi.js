'use strict'

const numerot = [];
while (numerot.length < 5) {
    const num = prompt('valitse numero: ');

    numerot.push(num);
}
for ( let i = 4; i > -1; i--) {
    console.log( numerot[i]);
}