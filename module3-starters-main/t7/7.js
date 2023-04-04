const trigger = document.querySelector('#trigger');
const target = document.querySelector('#target')
function booger(evt){
    target.src = 'img/picB.jpg'
}
function tooger(evt){
    target.src = 'img/picA.jpg'
}

trigger.addEventListener('mouseenter', booger);
trigger.addEventListener('mouseleave', tooger);