// Grab parts in the HTML
const moon = document.querySelector(".moon");
const sun = document.querySelector(".sun");
const themeSwitch = document.querySelector(".theme-switch");
const body = document.querySelector("body");
const applyButton = document.querySelector(".apply-button");
const resetButton = document.querySelector(".reset-button");

// Colors Variables
let isBlack = false;
let isWhite = true;

//  Events Listeners
moon.addEventListener("click", changeToLight);
sun.addEventListener("click", changeToDark);
applyButton.addEventListener("click", applyBackground);
resetButton.addEventListener("click", resetColor);

// Functions
function changeToLight() {
  body.style.background = "black";
  body.style.color = "white";
  moon.style.display = "none";
  sun.style.display = "block";
  isBlack = false;
  isWhite = true;
}

function changeToDark() {
  body.style.background = "white";
  body.style.color = "black";
  moon.style.display = "block";
  sun.style.display = "none";
  isBlack = false;
  isWhite = true;
}

function applyBackground(e) {
  e.preventDefault();
  const firstColor = document.querySelector("#first-color");
  const secondColor = document.querySelector("#second-color");
  body.style.background = `linear-gradient(to right, ${firstColor.value}, ${secondColor.value})`;
}

function resetColor(e) {
  e.preventDefault();
  body.style.background = "white";
  body.style.color = "black";
}
