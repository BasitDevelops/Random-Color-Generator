let button = document.querySelector('#btn');
let color = document.querySelector('.color');

button.addEventListener('click', function() {
    let h = getRandomNumber();
    let s = getRandomPercentage();
    let l = getRandomPercentage();

    let hsl = `hsl(${h},${s},${l})`;
    document.body.style.backgroundColor = hsl;
    color.innerText = hsl;
})

function getRandomNumber() {
    return Math.floor(Math.random() * 361);
}

function getRandomPercentage() {
    return `${Math.floor(Math.random() * 101)}%`;
}