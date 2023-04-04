'use strict';
const names = ['John', 'Paul', 'Jones'];

'use strict'

const list = document.querySelector(`#target`)
var html = 'a';
for (let i of names) {
    html = '<li>'+ i +'</li>\n';
    list.innerHTML += html;
}





