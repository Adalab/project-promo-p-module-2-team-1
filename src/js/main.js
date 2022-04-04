"use strict";

const desingLegend = document.querySelector(".js__legend");
const contextDesing = document.querySelector(".js__context");
const fillLegend = document.querySelector(".js__fill");
const contextFill = document.querySelector(".js__form");
const shareLegend = document.querySelector(".js__share");
const contextShare = document.querySelector(".js__contextshare");
// constantes botones:
const radioButton1 = document.querySelector(".js_radio-1");
const radioButton2 = document.querySelector(".js_radio-2");
const radioButton3 = document.querySelector(".js_radio-3");
const previewContainer = document.querySelector(".js_preview");

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

function handleClickRadioUnique(event) {
  const paletteClassToAdd = `palette-${event.currentTarget.value}`;

  previewContainer.classList.remove("palette-1");
  previewContainer.classList.remove("palette-2");
  previewContainer.classList.remove("palette-3");

  previewContainer.classList.add(paletteClassToAdd);
}

radioButton1.addEventListener("click", handleClickRadioUnique);
radioButton2.addEventListener("click", handleClickRadioUnique);
radioButton3.addEventListener("click", handleClickRadioUnique);

const fillul = document.querySelector(".js__allInputs");
const previewNameElement = document.querySelector(".js__preview_name");
const previewJobElement = document.querySelector(".js__preview_job");
const previewEmailElement = document.querySelector(".js__preview_email");
const previewPhoneElement = document.querySelector(".js__preview_phone");
const previewLinkedinElement = document.querySelector(".js__preview_linkedin");
const previewGithubElement = document.querySelector(".js__preview_github");

let data = {
  palette: "",
  name: "",
  job: "",
  email: "",
  phone: "",
  linkedin: "",
  github: "",
  photo: "",
};

function renderPreview() {
  previewNameElement.innerHTML = data.name || "Nombre Apellidos";
  previewJobElement.innerHTML = data.job || "Front-end developer";
  previewEmailElement.href = `mailto: ${data.email}`;
  previewPhoneElement.href = `https://api.whatsapp.com/send?phone=${data.phone}`;
  previewLinkedinElement.href = data.linkedin;
  previewGithubElement.href = `https://github.com/${data.github}`;
}

function handlekeyupInputs(event) {
  const elementWhereUserIsTyping = event.target;

  if (elementWhereUserIsTyping.name === "name") {
    data.name = elementWhereUserIsTyping.value;
  } else if (elementWhereUserIsTyping.name === "job") {
    data.job = elementWhereUserIsTyping.value;
  } else if (elementWhereUserIsTyping.name === "email") {
    data.email = elementWhereUserIsTyping.value;
  } else if (elementWhereUserIsTyping.name === "phone") {
    data.phone = elementWhereUserIsTyping.value;
  } else if (elementWhereUserIsTyping.name === "linkedin") {
    data.linkedin = elementWhereUserIsTyping.value;
  } else if (elementWhereUserIsTyping.name === "github") {
    data.github = elementWhereUserIsTyping.value;
  }

  renderPreview();
}

fillul.addEventListener("keyup", handlekeyupInputs);

const btnReset = document.querySelector(".js__btnreset");
const form = document.querySelector(".js__resetform");

function handleClick(event) {
  event.preventDefault();
  form.reset();

  previewNameElement.innerHTML = "Nombre Apellido";
  previewJobElement.innerHTML = "Front-end developer";
  profilePreview.style.backgroundImage = 'url("./assets/images/foto-de-perfil-en-linkedin.jpeg")';
  profileImage.style.backgroundImage = 'url()';
  previewPhoneElement.href = '';
  previewEmailElement.href = '';
  previewLinkedinElement.href = '';
  previewGithubElement.href = '';
  handleClickRadioUnique(event);
}

btnReset.addEventListener("click", handleClick);
