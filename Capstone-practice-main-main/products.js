import { pcCase } from "./temp-data-for-products/pcCase.js";
import { monitors } from "./temp-data-for-products/monitors.js";
import { cpu } from "./temp-data-for-products/cpu.js";

const productsGrid = document.querySelector('#grid');
const buttonMonitor = document.querySelector('#btn-monitor');
const buttonPcCase = document.querySelector('#btn-pc-case');
const buttonCPU = document.querySelector('#btn-cpu');



let productsHTML = '';

buttonPcCase.addEventListener('click', () => {
  productsHTML = '';
  pcCase.forEach((pcCase) => {
    productsHTML += `
    <div class="product-card">
    <div class="product-img-container">
      <img class="product-image" src="${pcCase.image}" alt="">
    </div>
      <p class="mt-3 mx-3 fw-bold">${pcCase.name}</p>
      <p class="mt-5 mx-3 fw-bold">₱${pcCase.price}</p>
    </div>`

    productsGrid.innerHTML = productsHTML;
  })
});


buttonMonitor.addEventListener('click', () => { 
  productsHTML = '';
  monitors.forEach((monitor) => { 
    productsHTML += `<div class="product-card">
    <div class="product-img-container">
      <img class="product-image" src="${monitor.image}" alt="">
    </div>
      <p class="mt-3 mx-3 fw-bold">${monitor.name}</p>
      <p class="mt-5 mx-3 fw-bold">₱${monitor.price}</p>
    </div>` 

    productsGrid.innerHTML = productsHTML;
  })
});

buttonCPU.addEventListener('click', () => { 
  productsHTML = '';
  cpu.forEach((cpu) => { 
    productsHTML += `<div class="product-card">
    <div class="product-img-container">
      <img class="product-image" src="${cpu.image}" alt="">
    </div>
      <p class="mt-3 mx-3 fw-bold">${cpu.name}</p>
      <p class="mt-5 mx-3 fw-bold">₱${cpu.price}</p>
    </div>` 

    productsGrid.innerHTML = productsHTML;
  })
});