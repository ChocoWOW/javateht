'use strict'

const numerot = [];

while (true){
    const num1 = prompt('Anna numero(0 lopettaa): ')
    const numa = parseInt(num1)
    if (numa == 0){
        break;
    }
    numerot.push(numa);
}

numerot.sort()

for (let i of numerot) {
    console.log(i)
}
