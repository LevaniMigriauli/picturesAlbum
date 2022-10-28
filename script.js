"use strict";

let btnMain = document.getElementById("btn-main");
let body = document.querySelector("body");

function getRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

btnMain.addEventListener("click", function () {
  body.style.backgroundColor = getRandomColor();
});
