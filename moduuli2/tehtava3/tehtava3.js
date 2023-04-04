'use strict'

const koirat = [];

while(koirat.length < 6){
    const nimi = prompt('Koiran nimi: ')
    koirat.push(nimi);
}

koirat.sort()
koirat.reverse()

var ol = document.querySelector(`#target`)


for (let i of koirat) {
    let li = document.createElement("li");
    li.innerHTML = i;
    ol.appendChild(li);
}