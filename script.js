"use strict";

let img = document.querySelectorAll(".img");

let arr = Object.values(img);

const imgWiden = img.forEach((el, i) =>
  el.addEventListener("click", function () {
    img[i].classList.toggle("img-widen");
    // img.style.width = "19%";
    console.log(el, i);
    // img[i].style.width = "100%";
    console.log(typeof img);
    console.log(img);
    console.log(arr);
    let spliced = arr.splice(i, 1);
    console.log(spliced, arr);
    arr.forEach((el) => el.classList.toggle("img-small"));
    arr.splice(i, 0, ...spliced);
    console.log(arr);
  })
);
