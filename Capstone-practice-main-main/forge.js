import { pcCase } from "./temp-data-for-products/pcCase.js";

const caseBtn = document.querySelector('.case');
const caseBtn = document.querySelector('.cpu');
const caseBtn = document.querySelector('.gpu');
const caseBtn = document.querySelector('.motherboard');
const caseBtn = document.querySelector('.ram');
const caseBtn = document.querySelector('.storage');
const caseBtn = document.querySelector('.power-supply');
const showAllCase = document.querySelector('.all-case');

let productsHTML = '';

caseBtn.addEventListener('click', () => {
  showAllCase.classList.toggle('active');
  if (showAllCase.classList.contains('active')) {
      showAllCase.classList.remove('not-active');
      pcCase.forEach((product) => {
        productsHTML += `
      <div class="shadow-none mx-3 bg-body-tertiary border border-dark-subtle border-bottom-0 fw-bold p-2" id="components-dropdown">
        <img class="case-img me-5" src="${product.image}" alt="">
        <div class="component-info">
        <p class="component-info">${product.name}</p>
        </div>
        <div class="component-info text-end"><p class="text-end">+${product.price}</p></div>
      </div>`;
        showAllCase.innerHTML = productsHTML;
    });
  } else if (!showAllCase.classList.contains('active')) {
    showAllCase.classList.add('not-active');
    productsHTML = '';
  }
  
})

