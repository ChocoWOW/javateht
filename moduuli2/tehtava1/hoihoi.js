'use strict'

const numerot = [];
while (numerot.length > 5) {
    const num = prompt('valitse numero: ')
    const num1 = parseInt(num)
    numerot.push(num1)
}
for (let i = 4; i > numerot.length; i--) {
    console.log( numerot[i] );
}