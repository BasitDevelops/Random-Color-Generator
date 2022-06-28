let colors = ['Black', 'Red', 'Green', 'Blue', 'Tomato', 'Orange', 'DodgerBlue', 'MediumSeaGreen', 'Gray', 'SlateBlue', 'Violet', 'LightGray', 'Purple', 'Yellow', 'HotPink', 'Aqua'];
let button = document.querySelector('#btn');
let color = document.querySelector('.color');

button.addEventListener('click', function () {
    let randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.innerText = colors[randomNumber];
});

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}
