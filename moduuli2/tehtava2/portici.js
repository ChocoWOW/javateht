'use strict'

const num1 = prompt('Number of participants: ')
const num = parseInt(num1)

var participants = [];
while (num > participants.length ){
    const names = prompt('Name of participant')
    participants.push(names)
}
participants.sort();

var ol = document.createElement("ol");


for (let i of participants) {
    let li = document.createElement("li");
    li.innerHTML = i;
    ol.appendChild(li);
}

document.getElementById("TARGET").appendChild(ol);
