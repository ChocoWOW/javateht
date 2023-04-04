'use strict'

const numerot = [];
while (true){
    const num1 = prompt('Anna numero: ')
    const numa = parseInt(num1)
    if(numerot.includes(numa)){
        break;
    }
    numerot.push(numa);
}

numerot.sort()

for (let i of numerot) {
    console.log(i)
}