"use strict";

const desingLegend = document.querySelector(".js__legend");
const contextDesing = document.querySelector(".js__context");
const fillLegend = document.querySelector(".js__fill");
const contextFill = document.querySelector(".js__form");
const shareLegend = document.querySelector(".js__share");
const contextShare = document.querySelector(".js__contextshare");

function reset() {
  contextDesing.classList.add("collapsed");
  contextFill.classList.add("collapsed");
  contextShare.classList.add("collapsed");

  desingLegend.children[1].classList.remove("fa-angle-up");
  desingLegend.children[1].classList.add("fa-angle-down");
  fillLegend.children[1].classList.remove("fa-angle-up");
  fillLegend.children[1].classList.add("fa-angle-down");
  shareLegend.children[1].classList.remove("fa-angle-up");
  shareLegend.children[1].classList.add("fa-angle-down");
}

function changeIcon(element) {
  if (element.children[1].classList.contains("fa-angle-down")) {
    element.children[1].classList.remove("fa-angle-down");
    element.children[1].classList.add("fa-angle-up");
  } else {
    element.children[1].classList.remove("fa-angle-up");
    element.children[1].classList.add("fa-angle-down");
  }
}

function toogle(context, legend, classname) {
  if (context.classList.contains(classname)) {
    reset();
    context.classList.remove(classname);
  } else {
    context.classList.add(classname);
  }

  changeIcon(legend);
}

desingLegend.addEventListener("click", function() {
  event.preventDefault();
  toogle(contextDesing, desingLegend, "collapsed");
});

fillLegend.addEventListener("click", function() {
  event.preventDefault();
  toogle(contextFill, fillLegend, "collapsed");
});

shareLegend.addEventListener("click", function() {
  event.preventDefault();
  toogle(contextShare, shareLegend, "collapsed");
});

/*
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
*/