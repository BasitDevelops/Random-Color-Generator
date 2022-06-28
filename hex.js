const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
let button = document.querySelector('#btn');
let color = document.querySelector('.color');

button.addEventListener('click', function () {
    let hexCode = '#';
    
    for (let index = 0; index < 6; index++) {
        hexCode += hex[getRandomNumber()];
    }

    document.body.style.backgroundColor = hexCode;
    color.innerText = hexCode;
})

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}
