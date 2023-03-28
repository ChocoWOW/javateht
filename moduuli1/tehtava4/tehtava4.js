
'use strict'

const num = (Math.random() * 4) + 1;
const talo = parseInt(num)
const nimi = prompt('kerro nimesi: ');
var sisalto
if (talo == 1) {
  sisalto = nimi + ', You are a ravenclaw';
}
if (talo == 2) {
  sisalto = nimi + ', You are a gryffindor';
}
if (talo == 3) {
  sisalto = nimi + ', You are a slytherin';
}
if (talo == 4) {
  sisalto = nimi + ', You are a hufflepuff';
}
