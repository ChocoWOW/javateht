'use strict'

  const num1 = prompt('Numero 1: ')
  const numa = parseInt(num1)

  const num2 = prompt('Numero 1: ')
  const numb = parseInt(num2)

  const num3 = prompt('Numero 1: ')
  const numc = parseInt(num3)

  const sum = numa + numb + numc;

  const avg = sum / 3;

  const prod = numa * numb * numc;

  document.querySelector('#sum').innerHTML = sum;

  document.querySelector('#avg').innerHTML = avg;

  document.querySelector('#prod').innerHTML = prod;