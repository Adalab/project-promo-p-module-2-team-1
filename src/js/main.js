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

function resetPalette() {
  previewContainer.classList.remove("palette-1");
  previewContainer.classList.remove("palette-2");
  previewContainer.classList.remove("palette-3");
}

//FUNCION MANEJADORA PARA LOS RADIOS DE LAS PALETAS
function handleClickRadioUnique(event) {
  const paletteClassToAdd = `palette-${event.currentTarget.value}`;
  resetPalette();
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
  if (data.email === "") {
    previewEmailElement.href = "";
    previewEmailElement.target = "";
  } else {
    previewEmailElement.href = `mailto: ${data.email}`;
    previewEmailElement.target = "_blank";
  }

  if (data.phone === "") {
    previewPhoneElement.href = "";
    previewPhoneElement.target = "";
  } else {
    previewPhoneElement.href = `https://api.whatsapp.com/send?phone=${data.phone}`;
    previewPhoneElement.target = "_blank";
  }
  if (data.linkedin === "") {
    previewLinkedinElement.href = "";
    previewLinkedinElement.target = "";
  } else {
    previewLinkedinElement.href = `https://www.${data.linkedin}`;
    previewLinkedinElement.target = "_blank";
  }

  if (data.github === "") {
    previewGithubElement.href = "";
    previewGithubElement.target = "";
  } else {
    previewGithubElement.href = `https://github.com/${data.github}`;
    previewGithubElement.target = "_blank";
  }
  if (data.photo === "") {
    profilePreview.style.backgroundImage = "";
    profileImage.style.backgroundImage = "";
  }
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
//FUNCION MANEJADORA PARA RECOGER DATOS INPUT FORMULARIO AL TECLEAR
fillul.addEventListener("keyup", handlekeyupInputs);
//FUNCION MANEJADORA PARA DETECTAR CAMBIOS(COPIAR-PEGAR ENLACES) DATOS INPUT FORMULARIO AL TECLEAR
fillul.addEventListener("change", handlekeyupInputs);

const btnReset = document.querySelector(".js__btnreset");
const form = document.querySelector(".js__resetform");

//DECLARACION DE FUNCION PARA INICIALIZAR LOS DATOS DEL OBJETO (DATA)
function resetData() {
  data.palette = "";
  data.name = "";
  data.job = "";
  data.email = "";
  data.phone = "";
  data.linkedin = "";
  data.github = "";
  data.photo = "";
}

function handleClick(event) {
  //METODO PARA PREVENIR EL COMPORTAMIENTO POR DEFECTO
  event.preventDefault();

  //METODO PARA INICIALIZAR LOS DATOS DE LOS INPUT DEL FORMULARIO FILL
  form.reset();

  //LLAMADA A LA FUNCION PARA INICIALIZAR LOS DATOS DEL OBJETO (DATA)
  resetData();

  //LLAMADA A LA FUNCION PARA PINTAR EN EL HTML-PREVIEW LOS DATOS RESETEADOS EN EL OBJETO (DATA)
  renderPreview();

  //LLAMADA A LA FUNCION PARA ELIMINAR LOS ESTILOS DE LAS PALETAS
  resetPalette();
}

btnReset.addEventListener("click", handleClick);

function createCard() {
  submitSpan.classList.add("btn_tex--disable");
  // submitButton.disabled = true;
  sendData();
  submitSpan.removeEventListener("click", createCard);
}

//input obligatorios

let submitButton = document.querySelector(".js-submit");
let submitSpan = document.querySelector(".js-submitSpan");
let responseURL = document.querySelector(".js-response");
let formShare = document.querySelector(".js-formshare");
let fr = new FileReader();

submitSpan.addEventListener('click', createCard);

function sendData () {
  let inputs = Array.from(formShare.elements);
  let json = getJSONFromInputs(inputs);
  json.photo = fr.result;
  sendRequest(json);
}

function loadPhoto(){
  let myFile = document.querySelector('#img-selector').files[0];
  fr.addEventListener('load', sendData);
  fr.readAsDataURL(myFile);
}

function getJSONFromInputs(inputs){
  return inputs.reduce(function (acc, val) {
    if(val.nodeName !== 'BUTTON')
      acc[val.name] = val.value;
    return acc;
  }, {});
}

function sendRequest(json){
  fetch('https://awesome-profile-cards.herokuapp.com/card/', {
    method: 'POST',
    body: JSON.stringify(json),
    headers: {
      'content-type': 'application/json'
    },
  })
    .then(function(resp) { return resp.json(); })
    .then(function(result) { showURL(result); })
    .catch(function (error) { console.log(error); });
  handleClickUrl();
}

function showURL(result){
  if(result.success){
    responseURL.innerHTML = '<a href=' + result.cardURL + '>' + result.cardURL + '</a>';
    console.log('holi');
  }else{
    responseURL.innerHTML = 'ERROR:' + result.error;
  }
}

const cardShare = document.querySelector(".js__card");
const createButton = document.querySelector(".js_create_button");
const errorDatos = document.querySelector(".js__error");


function handleClickUrl() {
  createButton.style.background = "#d5d5d5";
  cardShare.classList.add("js__collapsedshare");
}
// console.log(data);
// function handleClickCreateButton(event) {
//   event.preventDefault();
//   // handleClickUrl()
//   for (const value in data) {
//     const resulData = `data.${value} ${data[value]}`;
//     if (resulData.value === '') {
//       errorDatos.innerHTML = 'ERROR llena el nombre';
//     }
//     console.log(resulData.value);
//   }

  // if (resulData === '') {
  //   errorDatos.innerHTML = 'ERROR llena el nombre';
  // }
  // fetch("https://awesome-profile-cards.herokuapp.com/card", {
  //   method: "POST",
  //   header: { "Content-Type": "application/json" },
  //   body: JSON.stringify(data),
  // })
  //   .then((response) => response.json())
  //   .then((serverResp) => {
  //     function showURL(result) {
  //       if (result.success) {
  //         responseURL.innerHTML =
  //           "<a href=" + result.cardURL + ">" + result.cardURL + "</a>";
  //         console.log("holi");
  //       } else {
  //         responseURL.innerHTML = "ERROR:" + result.error;
  //       }
  //     }
  //     console.log(serverResp);

  //     if (serverResp.success === false) {
  //       // Ha ido mal
  //       // Mostrar un mensajito de error en la página
  //     } else {
  //       // El servidor ha aceptado los datos.
  //       // Mostrar la dirección que está en serverResp.cardURL y el botón de Tw.
  //     }
  //   });
// }

// createButton.addEventListener("click", handleClickCreateButton);
