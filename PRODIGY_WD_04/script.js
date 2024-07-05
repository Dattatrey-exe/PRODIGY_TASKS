let text = document.getElementById('text');
let background = document.getElementById('background');
let img = document.getElementById('img');

window.addEventListener('scroll', ()=>{
    let value = window.scrollY;
    
    text.style.marginTop = value * .8 + 'px';
    background.style.marginTop = value * -150 + 'px';
    img.style.paddingLeft = value * 1.5 + 'px';
})