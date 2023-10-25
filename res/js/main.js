const startButton = document.getElementById("startButton");
const point = document.getElementById("point");
let gameInterval;

startButton.onclick = () => {
  
  hideElement(startButton);
  startGameInterval(point);
};
const movePoint = (element, x, y) => {
  element.style.top = `${y}px`;
  element.style.left = `${x}px`;
};
const getRandomNumber = (minimum, maximum) =>
  Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

const hideElement = (element) => {
  element.style.display = "none";
};

const startGameInterval = () => {
  clearInterval(gameInterval);
  gameInterval = setInterval(() => {
    movePoint(point, getRandomNumber(50, 400), getRandomNumber(50, 400));
  }, 550);
};
