let button = document.querySelector('#btn');
let color = document.querySelector('.color');

button.addEventListener('click', function() {
    let r = getRandomNumber();
    let g = getRandomNumber();
    let b = getRandomNumber();

    let rgb = `rgb(${r},${g},${b})`;

    document.body.style.backgroundColor = rgb;
    color.innerText = rgb;
})

function getRandomNumber() {
    return Math.floor(Math.random() * 256);  
}








