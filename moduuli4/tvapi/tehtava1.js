'use strict'
//tää on oikeestaan tehtävät 1 ja 2
document.addEventListener('submit', async function(evt) {
    evt.preventDefault();
    const wow = document.querySelector('input[name=q]').value

    const hei = await fetch('https://api.tvmaze.com/search/shows?q=' + wow);
    const data = await hei.json();

    console.log(data)
    console.log(wow)

})


