"use strict";

let img = document.querySelectorAll(".img");
let img1 = document.querySelector(".img1");

img.forEach((el, i) =>
  el.addEventListener("click", function () {
    console.log(el, i);
    img[i].style.width = "100%";
    console.log(typeof img);
    console.log(img);
    let arr = Object.values(img);
    arr.splice(i, 1);
    console.log(arr);
  })
);
