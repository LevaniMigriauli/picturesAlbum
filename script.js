"use strict";

let mainContainer = document.querySelector(".container");
let products = document.querySelector("#products");
let btnLowToHigh = document.querySelector(".btn-low-to-high");
let btnHighToLow = document.querySelector(".btn-high-to-low");
let btnAToZ = document.querySelector(".btn-A-Z");
let btnZToA = document.querySelector(".btn-Z-A");

const arr = [
  ["Apple", 2.4],
  ["Banana", 1.8],
  ["Cherry", 3],
  ["Peach", 1.2],
  ["Watermelon", 0.7],
  ["Melon", 1],
  ["Plum", 3.2],
];

// sort by price
let sortedArray;
btnLowToHigh.addEventListener("click", clickHandler(false));

btnHighToLow.addEventListener("click", clickHandler(true));

function clickHandler(isReversed) {
  return () => {
    products.innerHTML = "";
    sortedArray = isReversed ? arr.sort(sorter).reverse() : arr.sort(sorter);
    arr.forEach(sortByNumber);
  };
}

function sorter(a, b) {
  return a[1] - b[1];
}

function sortByNumber(element) {
  let priceSorted = document.createElement("div");
  priceSorted.classList.add("product-box");
  priceSorted.innerText = element;
  products.appendChild(priceSorted);
}

console.log(arr[0][0]);
// Sort by name
btnAToZ.addEventListener("click", () => {
  // const sortAToZ = arr.sort((a, b) => a[0].localeCompare(b[0]));
  const sortAToZ = arr.sort();
});
