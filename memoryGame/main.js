var cardsArray = [
    { 'name': 'CSS', 'img': 'https://github.com/robgmerrill/img/blob/master/css3-logo.png?raw=true', },
    { 'name': 'HTML', 'img': 'https://github.com/robgmerrill/img/blob/master/html5-logo.png?raw=true', },
    { 'name': 'jQuery', 'img': 'https://github.com/robgmerrill/img/blob/master/jquery-logo.png?raw=true', },
    { 'name': 'JS', 'img': 'https://github.com/robgmerrill/img/blob/master/js-logo.png?raw=true', },
    { 'name': 'Node', 'img': 'https://github.com/robgmerrill/img/blob/master/nodejs-logo.png?raw=true', },
    { 'name': 'Photo Shop', 'img': 'https://github.com/robgmerrill/img/blob/master/photoshop-logo.png?raw=true', },
    { 'name': 'PHP', 'img': 'https://github.com/robgmerrill/img/blob/master/php-logo_1.png?raw=true', },
    { 'name': 'Python', 'img': 'https://github.com/robgmerrill/img/blob/master/python-logo.png?raw=true', },
    { 'name': 'Ruby', 'img': 'https://github.com/robgmerrill/img/blob/master/rails-logo.png?raw=true', },
    { 'name': 'Sass', 'img': 'https://github.com/robgmerrill/img/blob/master/sass-logo.png?raw=true', },
    { 'name': 'Sublime', 'img': 'https://github.com/robgmerrill/img/blob/master/sublime-logo.png?raw=true', },
    { 'name': 'Wordpress', 'img': 'https://github.com/robgmerrill/img/blob/master/wordpress-logo.png?raw=true', },
];
var gameGrid = cardsArray.concat(cardsArray);
gameGrid.sort(function () {
    return 0.5 - Math.random();
});
var Game = document.getElementById('game-board');
var Grid = document.createElement('section');
Grid.setAttribute('class', 'grid');
Game.appendChild(Grid);

var count = 0;
var previousTarget = null;
var firstGuess = '';
var secondGuess = '';
var delay = 120;

for (i = 0; i < gameGrid.length; i++) {
    // create a div element and assign to variable card
    var card = document.createElement('div');
    // Apply a card class to that div
    card.classList.add('card');
    // Set the data-name attribute of the div to the cardsArray name
    card.dataset.name = gameGrid[i].name;

    // Create front of card
    var front = document.createElement('div');
    front.classList.add('front');

    // Create back of card
    var back = document.createElement('div');
    back.classList.add('back');
    back.style.backgroundImage = `url(${gameGrid[i].img})`;

    // Append card to grid
    Grid.appendChild(card);
    card.appendChild(front);
    card.appendChild(back);
}

var resetGuesses = function () {
    count = 0;
    previousTarget = null;
    firstGuess = '';
    secondGuess = '';

    var selected = document.querySelectorAll('.selected');

    for (i = 0; i < selected.length; i++) {
        selected[i].classList.remove('selected');
    }
}

var match = function () {
    var selected = document.querySelectorAll('.selected');
    for (i = 0; i < selected.length; i++) {
        selected[i].classList.add('match');
    }
};


Grid.addEventListener('click', function (event) {
    var clicked = event.target;

    if (clicked.nodeName == 'SECTION' || clicked == previousTarget || 
    clicked.parentNode.classList.contains('match') || clicked.parentNode.classList.contains('selected')){
        return;
    }
    if (count < 2) {
        count++;
        if (count == 1) {
            firstGuess = clicked.parentNode.dataset.name;
            clicked.parentNode.classList.add('selected');
        }else {
            secondGuess = clicked.parentNode.dataset.name;
            clicked.parentNode.classList.add('selected');
        }
        if(firstGuess !== '' && secondGuess !== '') {
            if (firstGuess == secondGuess) {
                setTimeout(match, delay);
                setTimeout(resetGuesses, delay);
            } else {
                setTimeout(resetGuesses, delay);
            }
        }
    }
    previousTarget = clicked;
});