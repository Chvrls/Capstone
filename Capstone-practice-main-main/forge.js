import { pcCase } from "./temp-data-for-products/pcCase.js";
import { cpu } from "./temp-data-for-products/cpu.js";
import { gpu } from "./temp-data-for-products/gpu.js";
import { motherboard } from "./temp-data-for-products/motherboard.js";
import { ram } from "./temp-data-for-products/ram.js";
import { storage } from "./temp-data-for-products/storage.js";
import { powerSupply } from "./temp-data-for-products/powerSupply.js";

const caseBtn = document.querySelector('.case');
const cpuBtn = document.querySelector('.cpu');
const gpuBtn = document.querySelector('.gpu');
const motherboardBtn = document.querySelector('.motherboard');
const ramBtn = document.querySelector('.ram');
const storageBtn = document.querySelector('.storage');
const powerSupplyBtn = document.querySelector('.power-supply');

const showAllCase = document.querySelector('.all-case');
const showAllCpu = document.querySelector('.all-cpu');
const showAllGpu = document.querySelector('.all-gpu');
const showAllMotherboard = document.querySelector('.all-motherboard');
const showAllRam = document.querySelector('.all-ram');
const showAllStorage = document.querySelector('.all-storage');
const showAllPowerSupply = document.querySelector('.all-power-supply');

const componentCard = document.querySelectorAll('#component-card');
const componentsCategory = document.querySelectorAll('#components');


let productsHTML = '';

// caseBtn.addEventListener('click', () => {
//   showAllCase.classList.toggle('active');
//   if (showAllCase.classList.contains('active')) {
//       showAllCase.classList.remove('not-active');
//       pcCase.forEach((product) => {
//         productsHTML += `
//       <div class="shadow-none mx-3 bg-body-tertiary border border-dark-subtle border-bottom-0 fw-bold p-2" id="components-dropdown">
//         <img class="case-img me-5" src="${product.image}" alt="">
//         <div class="component-info">
//         <p class="component-info">${product.name}</p>
//         </div>
//         <div class="component-info text-end"><p class="text-end">+${product.price}</p></div>
//       </div>`;
//         showAllCase.innerHTML = productsHTML;
//     });
//   } else if (!showAllCase.classList.contains('active')) {
//     showAllCase.classList.add('not-active');
//     productsHTML = '';
//   }
  
// })

function showChosenComponent(componentDiv, componentName) {
  componentDiv.classList.toggle('show-components');
  if (componentDiv.classList.contains('show-components')) {
      componentDiv.classList.remove('hide-components');
      componentName.forEach((product) => {
        productsHTML += `
      <div class="shadow-none mx-3 bg-body-tertiary border border-dark-subtle border-bottom-0 fw-bold p-1" id="components-dropdown">
        <img class="case-img me-5" src="${product.image}" alt="">
        <div class="component-info">
        <p class="component-info">${product.name}</p>
        </div>
        <div class="component-info text-end"><p class="text-end">+${product.price}</p></div>
      </div>`;
        componentDiv.innerHTML = productsHTML;
    });
  } else if (!componentDiv.classList.contains('show-components')) {
    componentDiv.classList.add('hide-components');
    productsHTML = '';
  }
}

// function closeComponentDropdown() {
//   componentCard.classList.add('hide-components');
// }

// function showChosenComponent() {
//   componentsCategory.forEach((card) => {
//     closeComponentDropdown();
//   })

// if ()
// }

caseBtn.addEventListener('click', () => { productsHTML = '';  showChosenComponent(showAllCase, pcCase) });
cpuBtn.addEventListener('click', () => { productsHTML = ''; showChosenComponent(showAllCpu, cpu) });
gpuBtn.addEventListener('click', () => { productsHTML = ''; showChosenComponent(showAllGpu, gpu) });
motherboardBtn.addEventListener('click', () => { productsHTML = ''; showChosenComponent(showAllMotherboard, motherboard) });
ramBtn.addEventListener('click', () => { productsHTML = ''; showChosenComponent(showAllRam, ram) });
storageBtn.addEventListener('click', () => { productsHTML = ''; showChosenComponent(showAllStorage, storage) });
powerSupplyBtn.addEventListener('click', () => { productsHTML = ''; showChosenComponent(showAllPowerSupply, powerSupply) });


