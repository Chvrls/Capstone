import { allProducts } from "./temp-data-for-products/allProducts.js";
import { pcCase } from "./temp-data-for-products/pcCase.js";
import { monitors } from "./temp-data-for-products/monitors.js";
import { cpu } from "./temp-data-for-products/cpu.js";
import { gpu } from "./temp-data-for-products/gpu.js";
import { motherboard } from "./temp-data-for-products/motherboard.js";
import { ram } from "./temp-data-for-products/ram.js";
import { storage } from "./temp-data-for-products/storage.js";
import { powerSupply } from "./temp-data-for-products/powerSupply.js";

const productsGrid = document.querySelector('#grid');

const buttonAllProducts = document.querySelector('#btn-all-products');
const buttonMonitor = document.querySelector('#btn-monitor');
const buttonPcCase = document.querySelector('#btn-pc-case');
const buttonCPU = document.querySelector('#btn-cpu');
const buttonGPU = document.querySelector('#btn-gpu');
const buttonMotherboard = document.querySelector('#btn-motherboard');
const buttonRAM = document.querySelector('#btn-ram');
const buttonStorage = document.querySelector('#btn-storage');
const buttonPowerSupply = document.querySelector('#btn-power-supply');



let productsHTML = '';

// buttonPcCase.addEventListener('click', () => {
//   productsHTML = '';
//   pcCase.forEach((pcCase) => {
//     productsHTML += `
//     <div class="product-card">
//     <div class="product-img-container">
//       <img class="product-image" src="${pcCase.image}" alt="">
//     </div>
//       <p class="mt-3 mx-3 fw-bold">${pcCase.name}</p>
//       <p class="mt-5 mx-3 fw-bold">₱${pcCase.price}</p>
//     </div>`

//     productsGrid.innerHTML = productsHTML;
//   })
// });


// buttonMonitor.addEventListener('click', () => {
//   productsHTML = '';
//   monitors.forEach((monitor) => {
//     productsHTML += `<div class="product-card">
//     <div class="product-img-container">
//       <img class="product-image" src="${monitor.image}" alt="">
//     </div>
//       <p class="mt-3 mx-3 fw-bold">${monitor.name}</p>
//       <p class="mt-5 mx-3 fw-bold">₱${monitor.price}</p>
//     </div>`

//     productsGrid.innerHTML = productsHTML;
//   })
// });

// buttonCPU.addEventListener('click', () => {
//   productsHTML = '';
//   cpu.forEach((cpu) => {
//     productsHTML += `<div class="product-card">
//     <div class="product-img-container">
//       <img class="product-image" src="${cpu.image}" alt="">
//     </div>
//       <p class="mt-3 mx-3 fw-bold">${cpu.name}</p>
//       <p class="mt-5 mx-3 fw-bold">₱${cpu.price}</p>
//     </div>`

//     productsGrid.innerHTML = productsHTML;
//   })
// });

// buttonGPU.addEventListener('click', () => {
//   productsHTML = '';
//   gpu.forEach((gpu) => {
//     productsHTML += `<div class="product-card">
//     <div class="product-img-container">
//       <img class="product-image" src="${gpu.image}" alt="">
//     </div>
//       <p class="mt-3 mx-3 fw-bold">${gpu.name}</p>
//       <p class="mt-5 mx-3 fw-bold">₱${gpu.price}</p>
//     </div>`

//     productsGrid.innerHTML = productsHTML;
//   })
// });

// buttonMotherboard.addEventListener('click', () => {
//   productsHTML = '';
//   motherboard.forEach((motherboard) => {
//     productsHTML += `<div class="product-card">
//     <div class="product-img-container">
//       <img class="product-image" src="${motherboard.image}" alt="">
//     </div>
//       <p class="mt-3 mx-3 fw-bold">${motherboard.name}</p>
//       <p class="mt-5 mx-3 fw-bold">₱${motherboard.price}</p>
//     </div>`

//     productsGrid.innerHTML = productsHTML;
//   })
// });

// buttonRAM.addEventListener('click', () => {
//   productsHTML = '';
//   ram.forEach((ram) => {
//     productsHTML += `<div class="product-card">
//     <div class="product-img-container">
//       <img class="product-image" src="${ram.image}" alt="">
//     </div>
//       <p class="mt-3 mx-3 fw-bold">${ram.name}</p>
//       <p class="mt-5 mx-3 fw-bold">₱${ram.price}</p>
//     </div>`

//     productsGrid.innerHTML = productsHTML;
//   })
// });

// buttonStorage.addEventListener('click', () => {
//   productsHTML = '';
//   storage.forEach((storage) => {
//     productsHTML += `<div class="product-card">
//     <div class="product-img-container">
//       <img class="product-image" src="${storage.image}" alt="">
//     </div>
//       <p class="mt-3 mx-3 fw-bold">${storage.name}</p>
//       <p class="mt-5 mx-3 fw-bold">₱${storage.price}</p>
//     </div>`

//     productsGrid.innerHTML = productsHTML;
//   })
// });

// buttonPowerSupply.addEventListener('click', () => {
//   productsHTML = '';
//   powerSupply.forEach((powerSupply) => {
//     productsHTML += `<div class="product-card">
//     <div class="product-img-container">
//       <img class="product-image" src="${powerSupply.image}" alt="">
//     </div>
//       <p class="mt-3 mx-3 fw-bold">${powerSupply.name}</p>
//       <p class="mt-5 mx-3 fw-bold">₱${powerSupply.price}</p>
//     </div>`

//     productsGrid.innerHTML = productsHTML;
//   })
// });

function renderProductsHTML(category) { 
  category.forEach((product) => {
        productsHTML += `<div class="product-card">
        <div class="product-img-container">
          <img class="product-image" src="${product.image}" alt="">
        </div>
          <p class="mt-3 mx-3 fw-bold">${product.name}</p>
          <p class="mt-5 mx-3 fw-bold">₱${product.price}</p>
        </div>`
      productsGrid.innerHTML = productsHTML;
    })
}

buttonAllProducts.addEventListener('click', () => { productsHTML = ''; renderProductsHTML(allProducts) });
buttonCPU.addEventListener('click', () => { productsHTML = ''; renderProductsHTML(cpu) });
buttonGPU.addEventListener('click', () => { productsHTML = ''; renderProductsHTML(gpu) });
buttonMonitor.addEventListener('click', () => { productsHTML = ''; renderProductsHTML(monitors) });
buttonMotherboard.addEventListener('click', () => { productsHTML = ''; renderProductsHTML(motherboard) });
buttonPcCase.addEventListener('click', () => { productsHTML = ''; renderProductsHTML(pcCase) });
buttonPowerSupply.addEventListener('click', () => { productsHTML = ''; renderProductsHTML(powerSupply) });
buttonRAM.addEventListener('click', () => { productsHTML = ''; renderProductsHTML(ram) });
buttonStorage.addEventListener('click', () => { productsHTML = ''; renderProductsHTML(storage) });