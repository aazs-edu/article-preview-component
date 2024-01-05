"use strict";
// Select Elements
const shareBtn = document.getElementById("shareBtn");
const cardFooter = document.querySelector(".card-footer");
const author = document.querySelector(".card-footer .author");
const mbShareState = document.getElementById("mbShareState");
const pcShareState = document.getElementById("pcShareState");
// Create a MediaQueryList object
const mqbp = window.matchMedia("(max-width: 729px)"); 


shareBtn.addEventListener("click", () => {
  if (mqbp.matches) {
    // Activate Share State On Mobile
    cardFooter.classList.toggle("share-mb-state");
    author.classList.toggle("hide");
    mbShareState.classList.toggle("hide");
  }
  else{
    // Activate Share State On PC
    shareBtn.classList.toggle("share-pc-state");
    pcShareState.classList.toggle("hide");
  }
});