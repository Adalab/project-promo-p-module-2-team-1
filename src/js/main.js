"use strict";

const desingLegend = document.querySelector(".js__legend");
const contextDesing = document.querySelector(".js__context");

// desingLegend.addEventLi    stener("click", (hide) => {
//   contextDesing.classList.toggle("collapsed");
// });

function show() {
  contextDesing.classList.remove("collapsed");
}
function hide() {
  contextDesing.classList.add("collapsed");
}

function handleClick(event) {
  reset();
  event.preventDefault();
  if (contextDesing.classList.contains("collapsed")) {
    show();
  } else {
    hide();
  }
}

desingLegend.addEventListener("click", handleClick);

const fillLegend = document.querySelector(".js__fill");
const formFill = document.querySelector(".js__form");

// fillLegend.addEventListener("click", (hide) => {
//   formFill.classList.toggle("collapsed");
// });

function showFill() {
  formFill.classList.remove("collapsed");
}
function hideFill() {
  formFill.classList.add("collapsed");
}

function handleClickFill(event) {
  reset();
  event.preventDefault();
  if (formFill.classList.contains("collapsed")) {
    showFill();
  } else {
    hideFill();
  }
}

fillLegend.addEventListener("click", handleClickFill);

const shareLegend = document.querySelector(".js__share");
const contextShare = document.querySelector(".js__contextshare");

// shareLegend.addEventListener("click", (hide) => {
//   contextShare.classList.toggle("collapsed");
// });

function showShare() {
  contextShare.classList.remove("collapsed");
}
function hideShare() {
  contextShare.classList.add("collapsed");
}

function handleClickShare(event) {
  reset();
  event.preventDefault();
  if (contextShare.classList.contains("collapsed")) {
    showShare();
  } else {
    hideShare();
  }
}

shareLegend.addEventListener("click", handleClickShare);

function reset() {
  contextDesing.classList.add("collapsed");
  formFill.classList.add("collapsed");
  contextShare.classList.add("collapsed");
}
