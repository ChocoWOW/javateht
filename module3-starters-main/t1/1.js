'use strict'

const list = document.querySelector(`#target`)

const html =
    '<li>First item</li>\n' +
    '<li>Second item</li>\n' +
    '<li>Third item</li>';

var luokka = list.className = "my-list"

list.innerHTML = html, luokka;