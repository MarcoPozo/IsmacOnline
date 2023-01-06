setInterval(function () {
  let bar = document.getElementsByClassName("progress__progreso")[0];
  let fondo = document.getElementsByClassName("progress__bar")[0];

  bar.style.width = bar.clientWidth + 1 + "px";

  if (bar.clientWidth >= fondo.clientWidth) {
    bar.style.width = 1 + "px";
  }
}, 30);

/* Barras Circulares */

let progressBar = document.querySelector(".circles__progress");
let valueContainer = document.querySelector(".circles__value");

console.log(progressBar, valueContainer);

let progessValue = 0;
let progessEndValue = 60;
let speed = 30;

let progess = setInterval(() => {
  progessValue++;
  valueContainer.textContent = `${progessValue}%`;
  progressBar.style.background = `conic-gradient(#00a9ff ${progessValue * 3.6}deg, #00aaff33 ${progessValue * 3.6}deg)`

  if (progessValue == progessEndValue) {
    clearInterval(progess);
  }
}, speed);
