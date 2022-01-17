// Grab parts in the HTML
const moon = document.querySelector(".moon");
const sun = document.querySelector(".sun");
const themeSwitch = document.querySelector(".theme-switch");
const body = document.querySelector("body");
const applyButton = document.querySelector(".apply-button");
const resetButton = document.querySelector(".reset-button");
const firstColor = document.querySelector("#first-color");
const secondColor = document.querySelector("#second-color");
const colors = document.querySelector(".colors");
const randomizeButton = document.querySelector(".randomize-btn");

// Colors Variables
let isBlack = false;
let isWhite = true;

//  Events Listeners
moon.addEventListener("click", changeToDark);
sun.addEventListener("click", changeToLight);
applyButton.addEventListener("click", applyBackground);
resetButton.addEventListener("click", resetColor);
randomizeButton.addEventListener("click", randomizeColor);

// Functions
function changeToDark() {
  colors.style.border = "1px solid white";
  applyButton.style.border = "2px solid white";
  applyButton.style.color = "white";
  resetButton.style.border = "2px solid white";
  resetButton.style.color = "white";
  body.style.background = "black";
  body.style.color = "white";
  moon.style.display = "none";
  sun.style.display = "block";
  isBlack = false;
  isWhite = true;
}

function changeToLight() {
  colors.style.border = "1px solid black";
  applyButton.style.border = "2px solid black";
  applyButton.style.color = "black";
  resetButton.style.border = "2px solid black";
  resetButton.style.color = "black";
  body.style.background = "white";
  body.style.color = "black";
  moon.style.display = "block";
  sun.style.display = "none";
  isBlack = false;
  isWhite = true;
}

function applyBackground(e) {
  e.preventDefault();
  body.style.background = `linear-gradient(to right, ${firstColor.value}, ${secondColor.value})`;
  checkColor();
}

function resetColor(e) {
  e.preventDefault();
  body.style.background = "white";
  body.style.color = "black";
  firstColor.value = "#000000";
  secondColor.value = "#000000";
  colors.style.border = "1px solid black";
  resetButton.style.border = "2px solid black";
  resetButton.style.color = "black";
  applyButton.style.border = "2px solid black";
  applyButton.style.color = "black";
}

function randomizeColor(e) {
  e.preventDefault();
  randomizeButton.classList.add("clicked");
  firstColor.value =
    "#" + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6);
  secondColor.value =
    "#" + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6);
}

function checkColor() {}
