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

desingLegend.addEventListener("click", function () {
  event.preventDefault();
  toogle(contextDesing, desingLegend, "collapsed");
});

fillLegend.addEventListener("click", function () {
  event.preventDefault();
  toogle(contextFill, fillLegend, "collapsed");
});

shareLegend.addEventListener("click", function () {
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

const nombreCompleto = document.getElementById("nombre_completo");
const cardName = document.querySelector(".js__cardsname");
const jobPosition = document.getElementById("puesto");
const cardJob = document.querySelector(".js__cardjob");
const emailValue = document.getElementById("email");
const emailPreview = document.getElementById("emailPreview");
const phoneValue = document.getElementById("phoneValue");
const phonePreview = document.getElementById("phone");
const linkedinValue = document.getElementById("linkedinValue");
const linkedinPreview = document.getElementById("linkedin");
const githubValue = document.getElementById("githubValue");
const githubPreview = document.getElementById("github");

function handleElement(event) {
  event.preventDefault();
  cardName.innerHTML = nombreCompleto.value;
  cardJob.innerHTML = jobPosition.value;
  emailPreview.href = `mailto: ${emailValue.value}`;
  phonePreview.href = `https://api.whatsapp.com/send?phone= ${phoneValue.value}`;
  linkedinPreview.href = linkedinValue.value;
  githubPreview.href = `https://github.com/${githubValue.value}`;
}

// function handleElement1(event) {
//   event.preventDefault();
//   cardJob.innerHTML = jobPosition.value;
//   emailPreview.href = `mailto: ${emailValue.value}`;
//   phonePreview.href = `https://api.whatsapp.com/send?phone= ${phoneValue.value}`;
//   linkedinPreview.href = linkedinValue.value;
//   githubPreview.href = `https://github.com/${githubValue.value}`;
// }

nombreCompleto.addEventListener("keyup", handleElement);
jobPosition.addEventListener("keyup", handleElement);
emailValue.addEventListener("keyup", handleElement);
phoneValue.addEventListener("keyup", handleElement);
linkedinValue.addEventListener("keyup", handleElement);
githubValue.addEventListener("keyup", handleElement);

// const imageValue = document.getElementById("imageDev");
// const imagePreview = document.getElementById("cards__img");

// function imageCard(event) {
//   event.preventDefault();
//   imagePreview = imageValue.value;
// }

// imageValue.addEventListener("onLoad", imageCard);

const btnReset = document.querySelector(".preview__reset");
const form = document.querySelector(".main2__form");

function resetDates(event) {
  event.preventDefault();
  form.reset();
}

btnReset.addEventListener("click", resetDates);
