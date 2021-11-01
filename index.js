/* eslint-disable no-unused-expressions */
/* eslint-disable no-restricted-globals */
function getRandomNumber() {
  let n = Math.random();
  n *= 6;
  n = Math.floor(n) + 1;
  return n;
}

const randomNumber1 = getRandomNumber();
const randomNumber2 = getRandomNumber();

const imageSource1 = `/Dicee Game/images/dice${randomNumber1}.png`;
const imageSource2 = `/Dicee Game/images/dice${randomNumber2}.png`;

document.querySelectorAll('img')[0].setAttribute('src', imageSource1);
document.querySelectorAll('img')[1].setAttribute('src', imageSource2);

document.querySelector('.refresh-page ').addEventListener('click', (event) => {
  location.reload(event);
});

if (randomNumber1 === randomNumber2) {
  document.querySelector('.winner').innerHTML = 'The game is a draw, please refresh page';
  document.querySelector('h1').innerHTML = 'DRAW ';
} else {
  document.querySelector('h1').innerHTML = '🏆 WINNER! 🏆';

  randomNumber1 > randomNumber2
    ? (document.querySelector('.winner').innerHTML = 'Player 1 is the winner')
    : (document.querySelector('.winner').innerHTML = 'Player 2 is the winner');
}
