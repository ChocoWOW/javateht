'use strict'

const element = document.querySelector("#target");

const o = document.createTextNode('First item');
const t = document.createTextNode('Second item');
const tr = document.createTextNode('Third item');

const il = document.createElement('il');
const il1 = document.createElement('il');
const il2 = document.createElement('il');

il.appendChild(o);
il1.appendChild(t);
il2.appendChild(tr);

element.appendChild(il);
element.appendChild(il1);
element.appendChild(il2);


const third = document.getElementsByTagName('il')[1];

third.className = "my-item"