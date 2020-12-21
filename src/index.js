const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const startBtn = document.querySelector('button[data-action ="start"]');
const stopBtn = document.querySelector('button[data-action="stop"]');
const body = document.querySelector("body");

let intervalId;

function changeColor() {
  let _color = randomIntegerFromInterval(0, colors.length - 1);
  body.bgColor = colors[_color];
}
function startBtnFunction() {
  if (startBtn.click) {
    startBtn.disabled = true;
    intervalId = setInterval(changeColor, 1000);
  }
}
function stopBtnFunction() {
  if (stopBtn.click) {
    startBtn.disabled = false;
    clearInterval(intervalId);
  }
}

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

startBtn.addEventListener("click", startBtnFunction);
stopBtn.addEventListener("click", stopBtnFunction);
