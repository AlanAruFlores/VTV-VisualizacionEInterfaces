const barraBox = document.querySelector(".bar_container");

let barraItems = document.querySelectorAll(".bar_item");

console.log(barraItems);

let progresoActual = 0;
let quiereSolicitarTurno = false;

const btnSolicitar = document.getElementById("solicitarTurno");
console.log(btnSolicitar);

btnSolicitar.addEventListener("click", () => {
  console.log("me tocaste");
});

const sumarProgreso = () => {
  progresoActual += 20;
};

let 