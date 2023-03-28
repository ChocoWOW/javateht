'use strict'

const numero = confirm('Do you want to calculate the square root?');

if (numero == true) {
    const kerro = prompt('What number?')
    const num = parseInt(kerro)
    if (num > 0) {
        var vastaus = Math.sqrt(num);

    }
    else{
        vastaus = 'The square root of a negative number is not defined';
    }
}
else {
    vastaus = 'The square root is not calculated.';
}