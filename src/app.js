/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//simbolos de la carta
function randomCard() {
  let pok = ["diamond", "heart", "spades", "club"];
  let indexPok = Math.floor(Math.random() * pok.length);

  return pok[indexPok];
}
// numeros de la carta
function randomNumber() {
  let numerosPoker = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];
  let indexNumber = Math.floor(Math.random() * numerosPoker.length);
  return numerosPoker[indexNumber];
}

window.onload = function() {
  //write your code here
  const elementR = document.querySelector(".card").classList.add(randomCard());
  document.querySelector(".card").innerHTML = randomNumber();
};
