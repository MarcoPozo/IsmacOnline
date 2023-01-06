setInterval(function () {
  let bar = document.getElementsByClassName("progress__progreso")[0];
  let fondo = document.getElementsByClassName("progress__bar")[0];

  bar.style.width = bar.clientWidth + 1 + "px";

  if (bar.clientWidth >= fondo.clientWidth) {
    bar.style.width = 1 + "px";
  }
}, 30);

/* Barras Circulares */

let progressBarVinculacion = document.getElementById("circleProgresVinculacion");
let valueContainerVinculacion = document.getElementById("circleValueVinculacion");

let progressBarPracticas = document.getElementById("circleProgresPracticas");
let valueContainerPracticas = document.getElementById("circleValuePracticas");

let progressBarMaterias = document.getElementById("circleProgresMaterias");
let valueContainerMaterias = document.getElementById("circleValueMaterias");

const statsProgress = (progressBar, valueContainer, progessValue, progessEndValue) => {
  let progess = setInterval(() => {
    progessValue++;
    valueContainer.textContent = `${progessValue}%`;
    progressBar.style.background = `conic-gradient(#00a9ff ${
      progessValue * 3.6
    }deg, #00aaff33 ${progessValue * 3.6}deg)`;

    if (progessValue == progessEndValue) {
      clearInterval(progess);
    }
  }, 30);
};

statsProgress(progressBarVinculacion,valueContainerVinculacion ,0, 4);
statsProgress(progressBarPracticas,valueContainerPracticas ,0, 70);
statsProgress(progressBarMaterias,valueContainerMaterias ,0, 60);