'use strict'
async function hei() {
    const hei = await fetch('https://api.chucknorris.io/jokes/random');
    const data = await hei.json();
    const juttu = data.value
    console.log(juttu)
}

hei()