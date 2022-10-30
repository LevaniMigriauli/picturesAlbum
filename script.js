"use strict";

let img = document.querySelectorAll(".img");
let img1 = document.querySelector(".img1");

console.log(img);
let arr = Object.values(img);
// let arr = Object.keys(img);
// let arr = Object.entries(img);
console.log(arr);
const imgWiden = img.forEach((el, i) =>
  el.addEventListener("click", function () {
    console.log(el, i);
    img[i].style.width = "100%";
    console.log(typeof img);
    console.log(img);
    arr.splice(i, 1);
    console.log(arr);
    arr.forEach((el) => (el.style.width = "5%"));
    img[i].style.width = "75%";
  })
);
