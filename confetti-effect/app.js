let btn = document.querySelector('.btn')
let popup = document.querySelector('.popup')
let close = document.querySelector('.close')
let confettiEffect = document.querySelector('#my-canvas')
btn.onclick = function(){
    popup.classList.add('active')
    confettiEffect.classList.add('active')
}

close.onclick = function(){
    popup.classList.remove('active')
    confettiEffect.classList.remove('active')
}

// Confetti JS
var confettiSettings = { target: 'my-canvas' };
var confetti = new ConfettiGenerator(confettiSettings);
confetti.render();