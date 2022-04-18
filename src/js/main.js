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

const errorDatos = document.querySelector(".js__error");

const profileName = document.querySelector(".js__profile-name");
const profileJob = document.querySelector(".js__profile-job");
const profileEmail = document.querySelector(".js__profile-email");
const profilePhone = document.querySelector(".js__profile-phone");
const profileLinkedin = document.querySelector(".js__profile-linkedin");
const profileGithub = document.querySelector(".js__profile-github");

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
  data.palette = parseInt(event.currentTarget.value);
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
  palette: 1,
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
    previewLinkedinElement.href = `https://www.linkedin.com/in/${data.linkedin}`;
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
// Añadido el localStorage en cada uno de los elementos donde el usuario escribe
  if (elementWhereUserIsTyping.name === "name") {
    data.name = elementWhereUserIsTyping.value;
    localStorage.setItem("name", elementWhereUserIsTyping.value);
  } else if (elementWhereUserIsTyping.name === "job") {
    data.job = elementWhereUserIsTyping.value;
    localStorage.setItem("job", elementWhereUserIsTyping.value);
  } else if (elementWhereUserIsTyping.name === "email") {
    data.email = elementWhereUserIsTyping.value;
    localStorage.setItem("email", elementWhereUserIsTyping.value);
  } else if (elementWhereUserIsTyping.name === "phone") {
    data.phone = elementWhereUserIsTyping.value;
    localStorage.setItem("phone", elementWhereUserIsTyping.value);
  } else if (elementWhereUserIsTyping.name === "linkedin") {
    data.linkedin = elementWhereUserIsTyping.value;
    localStorage.setItem("linkedin", elementWhereUserIsTyping.value);
  } else if (elementWhereUserIsTyping.name === "github") {
    data.github = elementWhereUserIsTyping.value;
    localStorage.setItem("github", elementWhereUserIsTyping.value);
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
  data.palette = 1;
  data.name = "";
  data.job = "";
  data.email = "";
  data.phone = "";
  data.linkedin = "";
  data.github = "";
  data.photo = "";
}

function handleClickReset(event) {
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

  //SECCION COMPARTIR
  errorDatos.innerHTML = "";
  createButton.style.background = "#e17334";
  createButton.disabled = false;
  cardShare.classList.remove("js__collapsedshare");

  //REINICIAR COLLAPSABLES
  reset();

}

btnReset.addEventListener("click", handleClickReset);

const cardShare = document.querySelector(".js__card");
const createButton = document.querySelector(".js_create_button");

createButton.addEventListener("click", handleClickCreateCard);

function handleClickCreateCard(event) {
  event.preventDefault();

  errorDatos.innerHTML = "";
  if (
    data.name === "" ||
    data.palette === "" ||
    data.job === "" ||
    data.photo === "" ||
    data.email === "" ||
    data.linkedin === "" ||
    data.github === ""
  ) {
    errorDatos.innerHTML = `Debe rellenar todos los campos`;
  } else {
    fetch("https://awesome-profile-cards.herokuapp.com/card", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((serverResp) => {
        createButton.style.background = "#d5d5d5";
        createButton.disabled = true;
        cardShare.classList.add("js__collapsedshare");
        if (serverResp.success) {
          const result = document.querySelector(".js-response");
          result.innerHTML = serverResp.cardURL;
          result.href = serverResp.cardURL;

          //Twitter
          const shareTwitter = document.querySelector(".js_twitterShare");
          let urlTwitter = `https://twitter.com/intent/tweet?text=Mira%20mi%20tarjeta%20profesional&url=${serverResp.cardURL}`;
          shareTwitter.href = urlTwitter;
        } else {
          const createCard = document.querySelector(".js__createcard");
          createCard.innerHTML = serverResp.error;
        }
      });
  }
  
}

// Función que se ejecuta en el inicio y carga los datos del localStorage para pintarlo en la tarjeta (en el HTML)
function onReadyDocument() {
  profileName.value = localStorage.getItem("name");
  data.name = localStorage.getItem("name");

  profileJob.value = localStorage.getItem("job");
  data.job = localStorage.getItem("job");

  profileEmail.value = localStorage.getItem("email");
  data.email = localStorage.getItem("email");

  profilePhone.value = localStorage.getItem("phone");
  data.phone = localStorage.getItem("phone");

  profileLinkedin.value = localStorage.getItem("linkedin");
  data.linkedin = localStorage.getItem("linkedin");

  profileGithub.value = localStorage.getItem("github");
  data.github = localStorage.getItem("github");

  profileImage.style.backgroundImage = `url(${localStorage.getItem("photo")})`;
  profilePreview.style.backgroundImage = `url(${localStorage.getItem("photo")})`;
  data.photo = localStorage.getItem("photo");

  renderPreview();
}

onReadyDocument();