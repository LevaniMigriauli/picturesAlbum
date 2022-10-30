"use strict";

let img = document.querySelectorAll(".img");

let arr = Object.values(img);

const imgWiden = img.forEach((el, i) =>
  el.addEventListener("click", function () {
    img[i].classList.toggle("img-widen");
    let spliced = arr.splice(i, 1);
    arr.forEach((el) => el.classList.toggle("img-small"));
    arr.splice(i, 0, ...spliced);
  })
);
