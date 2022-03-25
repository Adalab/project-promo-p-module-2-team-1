'use strict';

const desingLegend = document.querySelector('.js__legend');
const contextDesing = document.querySelector('.js__context');

desingLegend.addEventListener('click', () => {
  contextDesing.classList.toggle('collapsed');
});


const fillLegend = document.querySelector('.js__fill');
const formFill = document.querySelector('.js__form');

fillLegend.addEventListener('click', () => {
  formFill.classList.toggle('collapsed');
});


const shareLegend = document.querySelector('.js__share');
const contextShare = document.querySelector('.js__contextshare');

shareLegend.addEventListener('click', () => {
  contextShare.classList.toggle('collapsed');
});